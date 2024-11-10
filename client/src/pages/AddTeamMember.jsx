import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import TeamMemberForm from '../components/Team/TeamMemberForm';

const AddTeamMember = () => {
  return (
    <DashboardLayout>
      <main className="p-3">
        <div className="panel">
          <div className="panel-header border-bottom">Add Team Member</div>
          <TeamMemberForm />
        </div>
      </main>
    </DashboardLayout>
  );
}

export default AddTeamMember