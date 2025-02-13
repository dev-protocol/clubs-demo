import {
  ClubsFunctionGetAdminPaths,
  ClubsFunctionGetPagePaths,
  ClubsFunctionPlugin,
  ClubsPluginMeta,
} from '@devprotocol/clubs-core'
import { default as Index } from './index.astro'
import { default as Admin } from './admin.astro'

export const getPagePaths: ClubsFunctionGetPagePaths = async (_) => [
  { paths: ['community'], component: Index },
]

export const getAdminPaths: ClubsFunctionGetAdminPaths = async (
  options,
  {}
) => [
  {
    paths: ['community'],
    component: Admin,
    props: { options },
  },
]

export const meta: ClubsPluginMeta = { displayName: 'Community' }

export default {
  getPagePaths,
  getAdminPaths,
  meta,
} as ClubsFunctionPlugin
