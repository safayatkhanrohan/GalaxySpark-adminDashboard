import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import TeamMemberForm from '../components/Team/TeamMemberForm';
import MetaData from '../components/layout/MetaData';

const AddTeamMember = () => {
  return (
    <>
      <MetaData
        title={"Add Team Member"}
        description={"GalaxySpark Add Team Member"}
        canonical={
          "https://galaxy-spark-admin-dashboard.vercel.app/team-member/create"
        }
      />
      <DashboardLayout>
        <main className="p-3">
          <div className="panel">
            <div className="panel-header border-bottom">Add Team Member</div>
            <TeamMemberForm />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
}

export default AddTeamMember