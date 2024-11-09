import React, { useEffect } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import toast from 'react-hot-toast'

const HomeSettings = () => {
    setTimeout(() => {
        toast.success("Welcome to the Home Settings page")
    }, 1500);
  return (
    <DashboardLayout>
        <main className="p-3">
            <div className="panel">
                    <div className="panel-header border-bottom">
                        Homepage Settings
                    </div>

                    <form>
                        <div className="panel-body p-4">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="row mb-3">
                                        <label htmlFor="siteName" className="col-form-label col-lg-3 end-label-lg">Application
                                            Name/ Company Name</label>
                                        <div className="col-lg-9">
                                            <input type="text" id="siteName" className="form-control"
                                                placeholder="Application Name" />
                                            <span className="d-block mt-1 fs-sm">This Name will be shown on the Title</span>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="address"
                                            className="col-form-label col-lg-3 end-label-lg">Address</label>
                                        <div className="col-lg-9">
                                            <input type="text" id="address" className="form-control" />
                                            <span className="d-block mt-1 fs-sm">You can use html tag</span>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="phone"
                                            className="col-form-label col-lg-3 end-label-lg">Phone Number</label>
                                        <div className="col-lg-9">
                                            <input type="text" id="phone" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="appUrl" className="col-form-label col-lg-3 end-label-lg">APP URL</label>
                                        <div className="col-lg-9">
                                            <input type="text" id="appUrl" className="form-control" value="https://admin-dashbaord.web.app" disabled />
                                            <span className="d-block mt-1 fs-sm">Site Address</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="panel-header border-bottom">
                            Telegram Notification
                        </div>
                        <div className="panel-body p-4">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="row mb-3">
                                        <label htmlFor="telegramToken"
                                            className="col-form-label col-lg-3 end-label-lg">Telegram Token</label>
                                        <div className="col-lg-9">
                                            <input type="text" id="telegramToken" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="telegramChatId"
                                            className="col-form-label col-lg-3 end-label-lg">Telegram Chat ID</label>
                                        <div className="col-lg-9">
                                            <input type="text" id="telegramChatId" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-9 offset-lg-3">
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        </main>
    </DashboardLayout>
  )
}

export default HomeSettings