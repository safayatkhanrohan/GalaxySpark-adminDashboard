import React from "react";
import { useForm } from "react-hook-form";
import { createProject } from "../../api/apiService";
import toast, { Toaster } from "react-hot-toast";

export const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        startDate: data.startDate || null,
        endDate: data.endDate || null,
        files: data.files.length > 0 ? Array.from(data.files) : [],
        team: data.team.split(",").map((member) => member.trim()),
        tech: data.tech.split(",").map((tech) => tech.trim()),
      };

      await createProject(formattedData);
      toast.success("Project created successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to create project. Please try again.");
    }
  };

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="panel-body p-4">
          <div className="row">
            <div className="col-xl-8">
              {/* Project Name */}
              <div className="row mb-3">
                <label
                  htmlFor="name"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Project Name <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Project Name"
                    {...register("name", {
                      required: "Project name is required",
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="row mb-3">
                <label
                  htmlFor="description"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Description <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="description"
                    className="form-control"
                    placeholder="Project Description"
                    {...register("description", {
                      required: "Description is required",
                      maxLength: 500,
                    })}
                  ></textarea>
                  {errors.description && (
                    <p style={{ color: "red" }}>{errors.description.message}</p>
                  )}
                </div>
              </div>

              {/* Client */}
              <div className="row mb-3">
                <label
                  htmlFor="client"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Client
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="client"
                    className="form-control"
                    placeholder="Client Name"
                    {...register("client", { maxLength: 100 })}
                  />
                  {errors.client && (
                    <p style={{ color: "red" }}>{errors.client.message}</p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div className="row mb-3">
                <label
                  htmlFor="projectType"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Project Type <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <select
                    id="projectType"
                    className="form-select"
                    {...register("projectType", {
                      required: "Project type is required",
                    })}
                  >
                    <option value="">Select Project Type</option>
                    <option value="Website">Website</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Software">Software</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p style={{ color: "red" }}>{errors.projectType.message}</p>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="row mb-3">
                <label
                  htmlFor="status"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Status <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <select
                    id="status"
                    className="form-select"
                    {...register("status", { required: "Status is required" })}
                  >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  {errors.status && (
                    <p style={{ color: "red" }}>{errors.status.message}</p>
                  )}
                </div>
              </div>

              {/* Start Date */}
              <div className="row mb-3">
                <label
                  htmlFor="startDate"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Start Date
                </label>
                <div className="col-lg-9">
                  <input
                    type="date"
                    id="startDate"
                    className="form-control"
                    {...register("startDate")}
                  />
                </div>
              </div>

              {/* End Date */}
              <div className="row mb-3">
                <label
                  htmlFor="endDate"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  End Date
                </label>
                <div className="col-lg-9">
                  <input
                    type="date"
                    id="endDate"
                    className="form-control"
                    {...register("endDate")}
                  />
                </div>
              </div>

              {/* Project Manager */}
              <div className="row mb-3">
                <label
                  htmlFor="projectManager"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Project Manager <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="projectManager"
                    className="form-control"
                    placeholder="Project Manager Name"
                    {...register("projectManager", {
                      required: "Project manager is required",
                    })}
                  />
                  {errors.projectManager && (
                    <p style={{ color: "red" }}>
                      {errors.projectManager.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Team */}
              <div className="row mb-3">
                <label
                  htmlFor="team"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Team Members (comma-separated)
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="team"
                    className="form-control"
                    placeholder="e.g., Alice, Bob, Charlie"
                    {...register("team")}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="row mb-3">
                <label
                  htmlFor="budget"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Budget
                </label>
                <div className="col-lg-9">
                  <input
                    type="number"
                    id="budget"
                    className="form-control"
                    placeholder="0"
                    min="0"
                    {...register("budget", { valueAsNumber: true })}
                  />
                </div>
              </div>

              {/* Spent */}
              <div className="row mb-3">
                <label
                  htmlFor="spent"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Spent
                </label>
                <div className="col-lg-9">
                  <input
                    type="number"
                    id="spent"
                    className="form-control"
                    placeholder="0"
                    min="0"
                    {...register("spent", { valueAsNumber: true })}
                  />
                </div>
              </div>

              {/* Technologies */}
              <div className="row mb-3">
                <label
                  htmlFor="tech"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Technologies (comma-separated)
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="tech"
                    className="form-control"
                    placeholder="e.g., React, Node.js, MongoDB"
                    {...register("tech")}
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="row mb-3">
                <label
                  htmlFor="notes"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Notes
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="notes"
                    className="form-control"
                    {...register("notes")}
                  ></textarea>
                </div>
              </div>

              {/* Live Preview */}
              <div className="row mb-3">
                <label
                  htmlFor="livePreview"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Live Preview URL
                </label>
                <div className="col-lg-9">
                  <input
                    type="url"
                    id="livePreview"
                    className="form-control"
                    placeholder="https://example.com"
                    {...register("livePreview", {
                      pattern: {
                        value: /^https?:\/\/[^\s]+$/,
                        message: "Invalid URL format",
                      },
                    })}
                  />
                  {errors.livePreview && (
                    <p style={{ color: "red" }}>{errors.livePreview.message}</p>
                  )}
                </div>
              </div>

              {/* Source File */}
              <div className="row mb-3">
                <label
                  htmlFor="sourceFile"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Source File URL
                </label>
                <div className="col-lg-9">
                  <input
                    type="url"
                    id="sourceFile"
                    className="form-control"
                    placeholder="https://example.com"
                    {...register("sourceFile", {
                      pattern: {
                        value: /^https?:\/\/[^\s]+$/,
                        message: "Invalid URL format",
                      },
                    })}
                  />
                  {errors.sourceFile && (
                    <p style={{ color: "red" }}>{errors.sourceFile.message}</p>
                  )}
                </div>
              </div>

              {/* Is Active */}
              <div className="row mb-3">
                <label
                  htmlFor="isActive"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Active
                </label>
                <div className="col-lg-9">
                  <input
                    type="checkbox"
                    id="isActive"
                    {...register("isActive")}
                  />
                </div>
              </div>

              {/* Files */}
              <div className="row mb-3">
                <label
                  htmlFor="files"
                  className="col-form-label col-lg-3 end-label-lg"
                >
                  Files
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="files"
                    multiple
                    {...register("files")}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="row mb-3">
                <div className="col-lg-9 offset-lg-3">
                  <button type="submit" className="btn btn-primary">
                    Create Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
