import React, { useEffect } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import toast from 'react-hot-toast'
import HomePageForm from '../components/HomePage/HomepageForm'

const HomeSettings = () => {
        toast.success("Welcome to the Home Settings page")
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