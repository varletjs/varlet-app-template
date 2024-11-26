import { EditableTreeNode } from 'unplugin-vue-router/types'

export interface StackRoute {
  name: string
  children?: StackRoute[]
}

export function extendRoute(route: EditableTreeNode) {
  const stacks = (route.meta?.stacks ?? []) as StackRoute[]

  processStacks(route, stacks)

  function processStacks(route: EditableTreeNode, stacks: (StackRoute | string)[]) {
    stacks.forEach((stack) => {
      const isStringifyStack = typeof stack === 'string'
      const name = isStringifyStack ? stack : stack.name
      const newRoute = route.insert(name, `/src/stacks/${name}.vue`)

      if (!isStringifyStack && stack.children) {
        processStacks(newRoute, stack.children)
      }
    })
  }
}
