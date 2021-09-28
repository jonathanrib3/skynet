import ConnectionClass from './ConnectionClass'

const connectionClass = new ConnectionClass()

connectionClass.connectDefault().then(() => {
  console.log(connectionClass.hasConnection())
  console.log(connectionClass.getDefaultConnection())
  import('../server/server')
  
}).catch(error => console.log(error))  

