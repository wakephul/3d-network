import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { z } from 'zod'
import { Trpc } from '~/core/trpc/base'
import { FileSystemTool } from '../../toolbox/server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PATH_TERMS_AND_CONDITIONS = FileSystemTool.joinPaths(
  __dirname,
  './terms-and-conditions.json',
)

export const TermsAndConditionsRouter = Trpc.createRouter({
  read: Trpc.procedure.query(async () => {
    const content = FileSystemTool.findFileContent(PATH_TERMS_AND_CONDITIONS)

    return content
  }),
  write: Trpc.procedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ input }) => {
      FileSystemTool.writeFile(PATH_TERMS_AND_CONDITIONS, input.content)
    }),
})
