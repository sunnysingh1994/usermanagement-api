import { Request , Response } from 'express';

import { connect } from '../database';
import { User } from '../interface/User'

export async function getUsers(req: Request,res: Response) :Promise<Response>{
    const conn = await connect();
    const users = await conn.query('SELECT * from users');
    return res.json(users[0]);
};

export async function createUser(req: Request,res: Response){
    const newUser : User  = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO users SET ?',[newUser]);
    return res.json({
        message:'User Created'
    });
};

export async function getUser(req: Request,res: Response) :Promise<Response>{
    const id = req.params.userId
    const conn = await connect();
    const users = await conn.query('SELECT * from users WHERE id = ?',[id]);
    return res.json(users[0]);
};

export async function deleteUser(req: Request,res: Response) :Promise<Response>{
    const id = req.params.userId
    const conn = await connect();
    const users = await conn.query('DELETE FROM users WHERE id = ?',[id]);
    return res.json({
         meassage : 'User Deleted'
    });
};

export async function updateUser(req: Request,res: Response){
    const id = req.params.userId;
    const updateUser : User = req.body;
    const conn = await connect();
    await conn.query('UPDATE users set ? WHERE id = ? ',[updateUser,id]);
    return res.json({
        message:'User Updated'
    });
};