import { useState, useEffect } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createViewState, JBrowseApp } from '@jbrowse/react-app'
import MSAViewPlugin from 'jbrowse-plugin-msaview'
import Protein3DPlugin from 'jbrowse-plugin-protein3d'
import config from './config'

type ViewModel = ReturnType<typeof createViewState>
console.log({ MSAViewPlugin, Protein3DPlugin })

function View() {
  const [viewState, setViewState] = useState<ViewModel>()

  useEffect(() => {
    const state = createViewState({
      // @ts-expect-error
      plugins: [MSAViewPlugin, Protein3DPlugin],
      config: {
        ...config,

        // remove this and the makeWorkerInstance if you do not want to use
        // web workers
        configuration: {
          rpc: {
            defaultDriver: 'WebWorkerRpcDriver',
          },
        },
      },

      hydrateFn: hydrateRoot,
      createRootFn: createRoot,
      makeWorkerInstance: () => {
        return new Worker(new URL('./rpcWorker', import.meta.url), {
          type: 'module',
        })
      },
    })
    setViewState(state)
  }, [])

  return viewState ? (
    <>
      <JBrowseApp viewState={viewState} />
    </>
  ) : null
}

export default View
