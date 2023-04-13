import Layout from '../components/Layout'
import Proyectos from '@components/Proyectos'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

export default function Projects ({ projects }) {
  return (
    <div>
      <Layout title={'Proyectos'}>
        <Proyectos data={projects} />
      </Layout>
    </div>
  )
}

export async function getStaticProps () {
  const projects = await fs.readFile(path.join(process.cwd(), 'src', 'content', 'projects.json')).then(JSON.parse)

  return {
    props: {
      projects
    }
  }
}
