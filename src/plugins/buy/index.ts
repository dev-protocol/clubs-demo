import type { Products } from '@constants/products'
import type { UndefinedOr } from '@devprotocol/util-ts'
import {
  ClubsFunctionGetAdminPaths,
  ClubsFunctionGetPagePaths,
  ClubsFunctionPlugin,
  ClubsPluginMeta,
} from '@devprotocol/clubs-core'
import { default as Index } from './index.astro'
import { default as Id } from './[id].astro'

export const getPagePaths: ClubsFunctionGetPagePaths = async (
  options,
  { propertyAddress, rpcUrl }
) => {
  const products = options.find((opt) => opt.key === 'products')
    ?.value as UndefinedOr<Products>
  return products
    ? [
        { paths: ['buy'], component: Index, props: { products } },
        ...products.map((product) => ({
          paths: ['buy', product.id],
          component: Id,
          props: { propertyAddress, product, rpcUrl },
        })),
      ]
    : []
}

export const getAdminPaths: ClubsFunctionGetAdminPaths = async () => []

export const meta: ClubsPluginMeta = { displayName: 'Buy' }

export default {
  getPagePaths,
  getAdminPaths,
  meta,
} as ClubsFunctionPlugin
