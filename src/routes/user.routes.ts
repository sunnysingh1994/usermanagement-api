import { Router } from 'express';
const router = Router();

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controller/user.controller'

router.route('/')
      .get(getUsers)
      .post(createUser);


router.route('/:userId')
      .get(getUser)
      .delete(deleteUser)
      .put(updateUser);
      
export default router;