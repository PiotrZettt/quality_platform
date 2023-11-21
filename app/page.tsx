
import WelcomeNav from './ui/welcomeNavBar/welcomeNav'


export default async function Home() {

  return (
    <div>
      <WelcomeNav/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
      <h3>
      <div className='text-zinc-700 text-4xl'>Welcome to <div className='text-[#617A55] inline' >IsInSpec</div></div>
      <div className=' text-zinc-700 text-2xl text-center pt-4'> The digital quality platform </div>
      </h3>
    </main>
    </div>
    
  )
}
