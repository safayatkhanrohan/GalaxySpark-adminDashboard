import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { ProjectForm } from '../components/projects/ProjectForm'

const CreateNewProject = () => {
  return (
    <DashboardLayout>
        <main className="p-3">
            <div className="panel">
                <div className="panel-header border-bottom">
                    Create New Project
                </div>
                <ProjectForm />
            </div>
        </main>
    </DashboardLayout>
  )
}

export default CreateNewProject