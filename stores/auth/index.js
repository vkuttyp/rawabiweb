import { defineStore } from 'pinia'
import { state } from './state'
import { getter } from './getter'
import { post } from './post'
import { query } from './query'
import { sync } from './sync'

export const useAuthStore = defineStore('authStore',{
  state,
  getter,
  actions: {...query, ...post, ...sync}
  })