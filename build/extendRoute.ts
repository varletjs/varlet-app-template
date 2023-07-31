export interface StackRoute {
  name: string
  children?: StackRoute[]
}

export function extendRoute(route: any) {
  const stacks = (route.meta?.stacks ?? []) as StackRoute[]

  const processStacks = (route: any, stacks: StackRoute[]) => {
    stacks.forEach((stack) => {
      const newRoute = {
        name: `${route.name}-${stack.name}`,
        path: stack.name,
        component: `/src/stacks/${stack.name}.vue`
      }
      route.children ??= []
      route.children.push(newRoute)

      if (stack.children) {
        processStacks(newRoute, stack.children)
      }
    })
  }

  processStacks(route, stacks)
}
