import { SuccessfulMessages } from '../shared/constants/messages/SuccessfulMessages';
import { connectionPoolConfig } from './db_connection_config';
import { getConnectionManager } from "typeorm";


export default class ConnectionClass {
  private connectionManager = getConnectionManager()

  
  hasConnection() {
    return `There is a pre-existing default connection? - ${this.connectionManager.has('default')}`
  }
  
  getDefaultConnection() {
    return `Is default connection actually functioning? - ${this.connectionManager.get('default').isConnected}` 
  }

  async connectDefault() {
    console.log(connectionPoolConfig)
    await this.connectionManager.create(connectionPoolConfig)
    await this.connectionManager.get('default').connect().then(() => {
      console.log(SuccessfulMessages.DATABASE_CONNECTION_SUCCESSFUL.message)
    }).catch(error => console.log(error))
    
  }
}