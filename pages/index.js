import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
})
const Dashboard = () => {
  return (
    <div>
      <Editor />
    </div>
  )
}

export default Dashboard
