"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Venue = {
  name: string;
};

type Project = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  venue: Venue;
};

const randomColors = [
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-red-100 text-red-800",
  "bg-pink-100 text-pink-800",
  "bg-purple-100 text-purple-800",
  "bg-orange-100 text-orange-800",
  "bg-teal-100 text-teal-800",
  "bg-blue-100 text-blue-800",
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load projects.json");
        }
        return response.json();
      })
      .then((data) => {
        const sortedProjects = data.sort(
          (a: Project, b: Project) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
        setProjects(sortedProjects);
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const offset = currentPage * itemsPerPage;
  const currentProjects = projects.slice(offset, offset + itemsPerPage);
  const totalEntries = projects.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-screen flex flex-col bg-white p-6">
      <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex-1 overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F7F7F9] text-[#6B7280] text-left text-sm font-medium">
                <th className="p-4 rounded-tl-lg">Name</th>
                <th className="p-4">Start Date</th>
                <th className="p-4">End Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 rounded-tr-lg">Venue</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project, index) => {
                const randomColor = randomColors[index % randomColors.length];
                return (
                  <tr
                    key={project.id}
                    className="transition-all duration-300 border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium text-[#111827] text-sm">
                      <Link
                        href={`/projects/${project.id}`}
                        className="no-underline hover:underline hover:text-blue-600"
                      >
                        {project.name}
                      </Link>
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {formatDate(project.startDate)}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {formatDate(project.endDate)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${randomColor}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {project.venue.name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination and Footer */}
        <div className="bg-[#F7F7F9] p-4 rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 text-sm">
              Showing{" "}
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full">
                {currentProjects.length}
              </span>{" "}
              of {totalEntries} entries
            </div>

            {/* Pagination Buttons */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    index === currentPage
                      ? "bg-[#0B083E] text-white font-semibold"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}