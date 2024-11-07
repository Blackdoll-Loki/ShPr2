import { $Enums } from "@prisma/client"
import { createBulkTask } from "./stages/0-createBulkTask"
import { downloadResults } from "./stages/2-downloadResult"
import { processResults } from "./stages/3-processResult"
import { waitForFinish } from "./stages/1-waitForFinish"

export const syncOrders = async () => {
  try {
    const task = await prisma.syncOrdersTask.findFirst({
      where: {
        inProgress: false,
        stage: {
          not: $Enums.SyncOrderTaskStage.FINISH
        }
      }
    })
  
    if(task){
      switch(task.stage){
        case $Enums.SyncOrderTaskStage.CREATE_BULK_TASK:
          return createBulkTask(task)
        case $Enums.SyncOrderTaskStage.WAIT_FOR_FINISH:
          return waitForFinish(task)
        case $Enums.SyncOrderTaskStage.DOWNLOAD_RESULT:
          return downloadResults(task)
        case $Enums.SyncOrderTaskStage.PROCESS_RESULT:
          return processResults(task)
      }
    }
  
    await fixZombieTasks()

  } catch (error) {
    console.warn("Error in syncOrders", error)
  }
}

const fixZombieTasks = async() => {
  await prisma.syncOrdersTask.updateMany({
    where: {
      inProgress: true,
      updatedAt: {
        lte: new Date(Date.now() - 1000 * 60 * 60)
      }
    },
    data: {
      inProgress: false,
      retryCount: {
        increment: 1
      },
      error: 'zombie task'
    }
  });
}