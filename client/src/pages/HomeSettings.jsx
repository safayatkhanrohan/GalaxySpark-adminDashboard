import DashboardLayout from '../components/layout/DashboardLayout'
import HomePageForm from '../components/HomePage/HomepageForm'

const HomeSettings = () => {
  return (
    <DashboardLayout>
        <main className="p-3">
            <div className="panel">
                    <div className="panel-header border-bottom">
                        Homepage Settings
                    </div>
                    <HomePageForm />
                </div>
        </main>
    </DashboardLayout>
  )
}

export default HomeSettings