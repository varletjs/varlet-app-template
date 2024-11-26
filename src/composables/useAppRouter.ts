export function useAppRouter() {
  const route = useRoute()
  const router = useRouter()

  function pushStack(path: string, query: Record<string, any> = {}) {
    const startsWithSlash = path.startsWith('/')
    const currentPathEndsWithSlash = route.path.endsWith('/')

    router.push({
      path: `${currentPathEndsWithSlash ? route.path.slice(0, -1) : route.path}${startsWithSlash ? path : `/${path}`}`,
      query: {
        ...route.query,
        ...query
      }
    })
  }

  return {
    route,
    router,
    pushStack
  }
}
