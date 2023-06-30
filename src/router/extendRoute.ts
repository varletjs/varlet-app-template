export function extendRoute(route: any) {
  const views = (route.meta?.views ?? []) as string[]

  if (!views.length) {
    return
  }

  views.forEach((view: string) => {
    const path = `${route.path}/${view}`

    route.children ??= []
    route.children.push({
      name: `${route.name}-${view}`,
      path,
      component: `/src/views/${view}.vue`
    })
  })
}
