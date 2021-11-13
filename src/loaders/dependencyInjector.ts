import {Container} from 'typedi'
import LoggerInstance from './logger.js'

export default  () => {
    Container.set('logger', LoggerInstance);
}