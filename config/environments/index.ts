import development from './dev'

import production from './prod'

import test from './test'

const isProd = process.env.NODE_ENV === 'production'

const isTest = process.env.NODE_ENV === 'test'

interface Environment {
  identity?: string
  port?: number
  host?: string
}

const env: Environment = isTest ? test : isProd ? production : development

export const Environment = env
