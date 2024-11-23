const { kafka } = require('./client')


async function init () {
  const admin = kafka.admin()
  console.log('admin connecting...')
  admin.connect()
  console.log('admin connection success...')

 
  console.log('Creating Topic[rider-updates]')
  await admin.createTopics({
    topics: [
      {
        topic: 'rider-updates',
        numPartitions: 2
      }
    ]
  })
  console.log('Topic created success [rider-updates]')
  await admin.disconnect()
  console.log('Disconnected!')
}

init()
