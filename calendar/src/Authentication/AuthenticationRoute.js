import React from 'react';
import Routering from './routes'
import Service from '../Services/UserService';

const service = new Service();

const ProtectedRoutes = ({children}) => {
  const Autentication = service.Autentication()
  console.log('Autentication', Autentication)
  return Autentication ? children : <Routering/>
}
 
export default ProtectedRoutes;