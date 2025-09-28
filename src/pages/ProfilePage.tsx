import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-slate-50 pt-12">
        <ProfileCard />
      </main>
    </div>
  )
}
