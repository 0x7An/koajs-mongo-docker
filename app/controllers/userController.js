/**
 * User controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the product service api to handle business logic, and returns a http response.
 * @module User controller.
 */

'use strict'
import { userService } from '../../domain/user/userService'
import { isEmail } from '../helpers'

const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

export const authenticate = async (ctx, next) => {
  const { email, password } = ctx.request.body
  await handleResponse(ctx, userService.authenticate({ email, password }))
}

export const index = async (ctx, next) => {
    await handleResponse(ctx, userService.getAllUsers())
}

export const find = async (ctx, next) => {
    const { id } = ctx.params;
    if (isEmail(id)){
        await handleResponse(ctx, userService.getUserByEmail(id))
    } else {
        await handleResponse(ctx, userService.getUserById(id))
    }
}

export const create = async (ctx, next) => {
    const { name, email, password } = ctx.request.body
    await handleResponse(ctx, userService.createUser({ name, email, password }))
}

export const update = async (ctx, next) => {
    const { id, name, email, password } = ctx.request.body
    await handleResponse(ctx, userService.updateUser({ id, name, email, password }))
}

export const destroy = async (ctx, next) => {
    const { id } = ctx.request.body
    await handleResponse(ctx, userService.destroy(id))
}