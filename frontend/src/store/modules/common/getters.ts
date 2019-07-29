export default {
    repoRelationsInfo: (state: any) => {
      return state.cache.repoRelations;
    },
    repoGroups: (state:any) => {
        return state.cache.repoGroups;
    },
    groupsInfo: (state: any) => {
      return state.cache.groupsInfo;
    },
    groupsList: (state: any) => {
      return Object.keys(state.cache.groupsInfo);
    },
    AugurAPI: (state: any) => {
      return state.AugurAPI;
    },
    repo: (state: any) => {
        return state.baseRepo;
    },
    gitRepo: (state: any) => {
        return state.gitRepo;
    },
    repos: (state: any) => {
        // console.log('CHECKED')
      return state.cache.getRepos
    },
    repo_groups: (state: any) => {
      return state.cache.getRepoGroups
    },
    sorted_repos: (state:any)=> (col: string, ascending: boolean) => {
        if (state.cache.getRepos == undefined) {
            return []
        }
        const items = [...state.cache.getRepos].sort((a,b) => {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
      return items
    },
    sorted_repo_groups: (state:any) => (col:string, ascending: boolean) => {
      const items = [...state.cache.getRepoGroups].sort((a,b) => {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
      return items
    },
    loaded_repos: (state:any) => {
        return state.cache.getRepos != null;
    },
    loaded_groups: (state:any) => {
        return state.cache.getRepoGroups != null;
    },
    getRepoByURL: (state:any) => (url:string, rg_name?:string) => {
        if (rg_name != null) {
            return state.cache['repoRelations'][rg_name][url]
        }

        for(var name in state.cache['repoRelations']) {

            for(var prop in state.cache['repoRelations'][name]) {
                if (prop == url) {
                    return state.cache['repoRelations'][name][url]
                }
            }
        }
        return undefined
    },
};