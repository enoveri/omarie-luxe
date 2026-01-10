import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'pd5ts6g8',
    dataset: 'production',
  },
  deployment: {
    appId: 'ilfuap7gu90j5flhw69zkmi1',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
