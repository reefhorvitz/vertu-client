import Request from '../index';
import {orm} from '../../config/config';
export default new Request(orm.url+'/api/')