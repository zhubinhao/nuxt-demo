
export default function ({ store, route }) {
  const matched = []
  route.matched.map((res) => {
    matched.push(res.path)
  })
  store.commit('setVisits', {
    name: route.name,
    path: route.path,
    fullPath: route.fullPath,
    params: route.params,
    query: route.query,
    matched
  })
}
