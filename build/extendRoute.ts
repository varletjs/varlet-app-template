export interface StackRoute {
  name: string
  children?: StackRoute[]
}

export function extendRoute(route: any) {
  const stacks = (route.meta?.stacks ?? []) as StackRoute[]

  const processStacks = (route: any, stacks: (StackRoute | string)[]) => {
    stacks.forEach((stack) => {
      const isStringifyStack = typeof stack === 'string'
      const name = isStringifyStack ? stack : stack.name
      const newRoute = {
        name: `${route.name}-${name}`,
        path: name,
        component: `/src/stacks/${name}.vue`
      }
      route.children ??= []
      route.children.push(newRoute)

      if (!isStringifyStack && stack.children) {
        processStacks(newRoute, stack.children)
      }
    })
  }

  processStacks(route, stacks)
}
