const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    // UI state
    const sidebarOpen = ref(false);
    const sideBarOpenDesktop = ref(true);
    const activeView = ref("dashboard");
    const showCreateModal = ref(false);
    const createModalType = ref("");
    const showDeleteModal = ref(false);
    const showProfileModal = ref(false);
    const activeTaskFilter = ref("all");
    const currentItem = ref(null);
    const deleteType = ref("");
    const deleteItemId = ref(null);

    // View modal state
    const showViewModal = ref(false);
    const viewModalType = ref("");
    const viewItem = ref({});

    // Form data
    const employeeForm = ref({
      id: null,
      name: "",
      email: "",
      department: "",
      position: "",
      status: "Active",
    });

    const projectForm = ref({
      id: null,
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "Not Started",
      progress: 0,
      tasksCompleted: 0,
      totalTasks: 0,
      team: [],
    });

    const taskForm = ref({
      id: null,
      title: "",
      description: "",
      project: "",
      assignedTo: "",
      dueDate: "",
      status: "Pending",
      priority: "Medium",
    });

    // Sample data for initial state
    const employees = ref([
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@hashmicro.com",
        department: "IT",
        position: "Senior Developer",
        status: "Active",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@hashmicro.com",
        department: "HR",
        position: "HR Manager",
        status: "Active",
      },
      {
        id: 3,
        name: "Robert Johnson",
        email: "robert.j@hashmicro.com",
        department: "Finance",
        position: "Accountant",
        status: "On Leave",
      },
      {
        id: 4,
        name: "Emily Davis",
        email: "emily.d@hashmicro.com",
        department: "Marketing",
        position: "Marketing Specialist",
        status: "Active",
      },
      {
        id: 5,
        name: "Michael Brown",
        email: "michael.b@hashmicro.com",
        department: "Operations",
        position: "Operations Manager",
        status: "Active",
      },
      {
        id: 6,
        name: "Sarah Wilson",
        email: "sarah.w@hashmicro.com",
        department: "Marketing",
        position: "Content Manager",
        status: "Active",
      },
      {
        id: 7,
        name: "Tom Clark",
        email: "tom.c@hashmicro.com",
        department: "IT",
        position: "UI/UX Designer",
        status: "Active",
      },
      {
        id: 8,
        name: "Linda Taylor",
        email: "linda.t@hashmicro.com",
        department: "IT",
        position: "QA Engineer",
        status: "Active",
      },
      {
        id: 9,
        name: "David Miller",
        email: "david.m@hashmicro.com",
        department: "Sales",
        position: "Sales Director",
        status: "Active",
      },
      {
        id: 10,
        name: "Jennifer White",
        email: "jennifer.w@hashmicro.com",
        department: "HR",
        position: "Recruitment Specialist",
        status: "On Leave",
      },
      {
        id: 11,
        name: "James Anderson",
        email: "james.a@hashmicro.com",
        department: "Finance",
        position: "Financial Analyst",
        status: "Active",
      },
      {
        id: 12,
        name: "Patricia Martinez",
        email: "patricia.m@hashmicro.com",
        department: "Operations",
        position: "Supply Chain Manager",
        status: "Active",
      },
      {
        id: 13,
        name: "Richard Thomas",
        email: "richard.t@hashmicro.com",
        department: "IT",
        position: "Network Administrator",
        status: "Terminated",
      },
      {
        id: 14,
        name: "Lisa Robinson",
        email: "lisa.r@hashmicro.com",
        department: "Marketing",
        position: "Digital Marketing Specialist",
        status: "Active",
      },
      {
        id: 15,
        name: "William Harris",
        email: "william.h@hashmicro.com",
        department: "Sales",
        position: "Business Development Manager",
        status: "Active",
      },
    ]);

    const projects = ref([
      {
        id: 1,
        name: "Website Redesign",
        description:
          "Redesign the company website with new branding and improved UX",
        startDate: "2025-02-01",
        endDate: "2025-04-15",
        status: "In Progress",
        progress: 45,
        tasksCompleted: 9,
        totalTasks: 20,
        team: [
          "John Doe",
          "Emily Davis",
          "Tom Clark",
          "Sarah Wilson",
          "Lisa Robinson"
        ],
      },
      {
        id: 2,
        name: "Mobile App Development",
        description:
          "Develop a mobile app for customers to access our services",
        startDate: "2025-01-15",
        endDate: "2025-05-30",
        status: "In Progress",
        progress: 30,
        tasksCompleted: 12,
        totalTasks: 40,
        team: ["John Doe", "Robert Johnson", "Linda Taylor", "Richard Thomas"],
      },
      {
        id: 3,
        name: "CRM Implementation",
        description:
          "Implement a new CRM system for improved customer management",
        startDate: "2025-03-01",
        endDate: "2025-06-30",
        status: "Not Started",
        progress: 0,
        tasksCompleted: 0,
        totalTasks: 15,
        team: ["Jane Smith", "Michael Brown", "Emily Davis", "David Miller", "Jennifer White"],
      },
      {
        id: 4,
        name: "Marketing Campaign",
        description: "Launch Q2 marketing campaign for new product line",
        startDate: "2025-01-01",
        endDate: "2025-03-31",
        status: "Completed",
        progress: 100,
        tasksCompleted: 18,
        totalTasks: 18,
        team: ["Emily Davis", "Sarah Wilson", "Lisa Robinson", "William Harris"],
      },
      {
        id: 5,
        name: "Financial Analysis",
        description: "Quarterly financial analysis and budget planning",
        startDate: "2025-03-10",
        endDate: "2025-04-10",
        status: "In Progress",
        progress: 65,
        tasksCompleted: 7,
        totalTasks: 12,
        team: ["Robert Johnson", "James Anderson", "Patricia Martinez"],
      },
      {
        id: 6,
        name: "Employee Training Program",
        description: "Develop comprehensive training program for new hires",
        startDate: "2025-02-15",
        endDate: "2025-05-15",
        status: "In Progress",
        progress: 40,
        tasksCompleted: 4,
        totalTasks: 10,
        team: ["Jane Smith", "Jennifer White", "Patricia Martinez"],
      },
      {
        id: 7,
        name: "IT Infrastructure Upgrade",
        description: "Upgrade servers and network infrastructure",
        startDate: "2025-04-01",
        endDate: "2025-07-31",
        status: "Not Started",
        progress: 0,
        tasksCompleted: 0,
        totalTasks: 25,
        team: ["Michael Brown", "Richard Thomas", "Tom Clark", "Linda Taylor"],
      },
    ]);

    const tasks = ref([
      {
        id: 1,
        title: "Design Homepage Mockup",
        description:
          "Create wireframe and mockup designs for the new homepage",
        project: "Website Redesign",
        assignedTo: "Tom Clark",
        dueDate: "2025-03-15",
        status: "Completed",
        priority: "High",
      },
      {
        id: 2,
        title: "Develop User Authentication",
        description:
          "Implement user authentication system for the mobile app",
        project: "Mobile App Development",
        assignedTo: "John Doe",
        dueDate: "2025-03-20",
        status: "In Progress",
        priority: "High",
      },
      {
        id: 3,
        title: "Data Migration Plan",
        description:
          "Create a plan for migrating existing customer data to the new CRM",
        project: "CRM Implementation",
        assignedTo: "Jane Smith",
        dueDate: "2025-04-01",
        status: "Pending",
        priority: "Medium",
      },
      {
        id: 4,
        title: "Fix Navigation Menu Bug",
        description:
          "Fix the responsive navigation menu bug on mobile devices",
        project: "Website Redesign",
        assignedTo: "John Doe",
        dueDate: "2025-03-10",
        status: "In Progress",
        priority: "Medium",
      },
      {
        id: 5,
        title: "Create Social Media Assets",
        description:
          "Design promotional images and graphics for social media marketing",
        project: "Marketing Campaign",
        assignedTo: "Emily Davis",
        dueDate: "2025-03-18",
        status: "Completed",
        priority: "Low",
      },
      {
        id: 6,
        title: "Quarterly Budget Analysis",
        description:
          "Analyze Q1 expenditures and prepare Q2 budget recommendations",
        project: "Financial Analysis",
        assignedTo: "James Anderson",
        dueDate: "2025-03-25",
        status: "In Progress",
        priority: "High",
      },
      {
        id: 7,
        title: "User Testing Coordination",
        description:
          "Organize user testing sessions for the new mobile app",
        project: "Mobile App Development",
        assignedTo: "Linda Taylor",
        dueDate: "2025-04-05",
        status: "Pending",
        priority: "Medium",
      },
      {
        id: 8,
        title: "Content Creation for Marketing Campaign",
        description:
          "Write copy and content for Q2 marketing campaign",
        project: "Marketing Campaign",
        assignedTo: "Sarah Wilson",
        dueDate: "2025-03-12",
        status: "Completed",
        priority: "Medium",
      },
      {
        id: 9,
        title: "Server Requirements Documentation",
        description:
          "Document requirements for new server infrastructure",
        project: "IT Infrastructure Upgrade",
        assignedTo: "Richard Thomas",
        dueDate: "2025-04-10",
        status: "Pending",
        priority: "Medium",
      },
      {
        id: 10,
        title: "New Hire Onboarding Presentation",
        description:
          "Create presentation slides for new employee orientation",
        project: "Employee Training Program",
        assignedTo: "Jennifer White",
        dueDate: "2025-03-28",
        status: "In Progress",
        priority: "Medium",
      },
      {
        id: 11,
        title: "SEO Optimization",
        description:
          "Optimize website content for search engines",
        project: "Website Redesign",
        assignedTo: "Lisa Robinson",
        dueDate: "2025-03-30",
        status: "Pending",
        priority: "Medium",
      },
      {
        id: 12,
        title: "API Documentation",
        description:
          "Document RESTful API endpoints for mobile app developers",
        project: "Mobile App Development",
        assignedTo: "Richard Thomas",
        dueDate: "2025-03-15",
        status: "Completed",
        priority: "Low",
      },
    ]);

    // Computed properties
    const filteredTasks = computed(() => {
      if (activeTaskFilter.value === "all") {
        return tasks.value;
      } else if (activeTaskFilter.value === "pending") {
        return tasks.value.filter((task) => task.status === "Pending");
      } else if (activeTaskFilter.value === "in-progress") {
        return tasks.value.filter((task) => task.status === "In Progress");
      } else if (activeTaskFilter.value === "completed") {
        return tasks.value.filter((task) => task.status === "Completed");
      }
      return tasks.value;
    });

    const employeeOptions = computed(() => {
      return employees.value
        .filter((emp) => emp.status === "Active")
        .map((emp) => emp.name);
    });

    const projectOptions = computed(() => {
      return projects.value.map((project) => project.name);
    });

    // View modal computed properties
    const assignedProjects = computed(() => {
      if (
        viewModalType.value !== "employee" ||
        !viewItem.value ||
        !viewItem.value.name
      ) {
        return [];
      }

      return projects.value.filter(
        (project) => project.team && project.team.includes(viewItem.value.name)
      );
    });

    const assignedTasks = computed(() => {
      if (
        viewModalType.value !== "employee" ||
        !viewItem.value ||
        !viewItem.value.name
      ) {
        return [];
      }

      return tasks.value.filter(
        (task) => task.assignedTo === viewItem.value.name
      );
    });

    const projectTasks = computed(() => {
      if (
        viewModalType.value !== "project" ||
        !viewItem.value ||
        !viewItem.value.name
      ) {
        return [];
      }

      return tasks.value.filter((task) => task.project === viewItem.value.name);
    });

    const projectProgress = computed(() => {
      if (
        viewModalType.value !== "task" ||
        !viewItem.value ||
        !viewItem.value.project
      ) {
        return null;
      }

      const relatedProject = projects.value.find(
        (p) => p.name === viewItem.value.project
      );
      return relatedProject ? relatedProject.progress : null;
    });

    // Generate a new ID for items
    const generateId = (collection) => {
      const ids = collection.map((item) => item.id);
      return ids.length > 0 ? Math.max(...ids) + 1 : 1;
    };

    // Reset form data
    const resetForms = () => {
      employeeForm.value = {
        id: null,
        name: "",
        email: "",
        department: "",
        position: "",
        status: "Active",
      };

      projectForm.value = {
        id: null,
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "Not Started",
        progress: 0,
        tasksCompleted: 0,
        totalTasks: 0,
        team: [],
      };

      taskForm.value = {
        id: null,
        title: "",
        description: "",
        project: "",
        assignedTo: "",
        dueDate: "",
        status: "Pending",
        priority: "Medium",
      };
    };

    // Toast functions using Toastify
    const showToast = (message, type = "info") => {
      let backgroundColor = "#172b4d"; // Default/info - navy

      if (type === "success") {
        backgroundColor = "#10B981"; // Success - green
      } else if (type === "error") {
        backgroundColor = "#e21c21"; // Error - hashmicro red
      } else if (type === "warning") {
        backgroundColor = "#ff8f00"; // Warning - hashmicro orange
      }

      Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: backgroundColor,
        stopOnFocus: true,
      }).showToast();
    };

    // UI methods
    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    const toggleSidebarDesktop = () => {
      sideBarOpenDesktop.value = !sideBarOpenDesktop.value;
    };

    const setActiveView = (view) => {
      activeView.value = view;
      // Close sidebar on mobile when changing views
      if (window.innerWidth < 768) {
        sidebarOpen.value = false;
      }
    };

    // View functions
    const viewEmployee = (employee) => {
      viewItem.value = { ...employee };
      viewModalType.value = "employee";
      showViewModal.value = true;
    };

    const viewProject = (project) => {
      viewItem.value = { ...project };
      viewModalType.value = "project";
      showViewModal.value = true;
    };

    const viewTask = (task) => {
      viewItem.value = { ...task };
      viewModalType.value = "task";
      showViewModal.value = true;
    };

    const closeViewModal = () => {
      showViewModal.value = false;
      // Small delay to prevent seeing the modal empty before it fully closes
      setTimeout(() => {
        viewItem.value = {};
        viewModalType.value = "";
      }, 300);
    };

    // CRUD Operations
    // --- CREATE ---
    const openCreateModal = (type) => {
      resetForms();
      createModalType.value = type;
      showCreateModal.value = true;
    };

    const saveNewItem = () => {
      try {
        if (createModalType.value === "employee") {
          // Form validation
          if (
            !employeeForm.value.name ||
            !employeeForm.value.email ||
            !employeeForm.value.department ||
            !employeeForm.value.position
          ) {
            showToast("Please fill in all required fields", "error");
            return;
          }

          // Create new employee
          const newEmployee = {
            ...employeeForm.value,
            id: generateId(employees.value),
          };

          employees.value.push(newEmployee);
          showToast(
            `Employee ${newEmployee.name} has been added successfully.`,
            "success"
          );
        } else if (createModalType.value === "project") {
          // Form validation
          if (
            !projectForm.value.name ||
            !projectForm.value.description ||
            !projectForm.value.startDate ||
            !projectForm.value.endDate
          ) {
            showToast("Please fill in all required fields", "error");
            return;
          }

          // Handle team selection
          let selectedTeam = [];
          const teamSelect = document.getElementById("team");
          if (teamSelect) {
            Array.from(teamSelect.selectedOptions).forEach((option) => {
              selectedTeam.push(option.value);
            });
          }

          // Create new project
          const newProject = {
            ...projectForm.value,
            id: generateId(projects.value),
            team: selectedTeam,
            progress: parseInt(projectForm.value.progress) || 0,
            tasksCompleted: parseInt(projectForm.value.tasksCompleted) || 0,
            totalTasks: parseInt(projectForm.value.totalTasks) || 0,
          };

          projects.value.push(newProject);
          showToast(
            `Project ${newProject.name} has been added successfully.`,
            "success"
          );
        } else if (createModalType.value === "task") {
          // Form validation
          if (
            !taskForm.value.title ||
            !taskForm.value.project ||
            !taskForm.value.assignedTo ||
            !taskForm.value.dueDate
          ) {
            showToast("Please fill in all required fields", "error");
            return;
          }

          // Create new task
          const newTask = {
            ...taskForm.value,
            id: generateId(tasks.value),
          };

          tasks.value.push(newTask);

          // Update project task counts
          const relatedProject = projects.value.find(
            (p) => p.name === newTask.project
          );
          if (relatedProject) {
            relatedProject.totalTasks++;
            if (newTask.status === "Completed") {
              relatedProject.tasksCompleted++;
            }

            // Update progress
            if (relatedProject.totalTasks > 0) {
              relatedProject.progress = Math.round(
                (relatedProject.tasksCompleted / relatedProject.totalTasks) *
                  100
              );
            }
          }

          showToast(
            `Task ${newTask.title} has been added successfully.`,
            "success"
          );
        }

        // Close modal and reset form
        showCreateModal.value = false;
        resetForms();
      } catch (error) {
        console.error("Error saving item:", error);
        showToast("An error occurred while saving. Please try again.", "error");
      }
    };

    // --- UPDATE ---
    const openEditModal = (item, type) => {
      resetForms();
      createModalType.value = type;
      showCreateModal.value = true;
      currentItem.value = { ...item }; // Store original for comparison

      if (type === "employee") {
        employeeForm.value = { ...item };
      } else if (type === "project") {
        projectForm.value = { ...item };

        // Set selected team members in the select element
        setTimeout(() => {
          const teamSelect = document.getElementById("team");
          if (teamSelect) {
            Array.from(teamSelect.options).forEach((option) => {
              option.selected = item.team.includes(option.value);
            });
          }
        }, 100);
      } else if (type === "task") {
        taskForm.value = { ...item };
      }
    };

    const updateItem = () => {
      try {
        if (createModalType.value === "employee") {
          // Form validation
          if (
            !employeeForm.value.name ||
            !employeeForm.value.email ||
            !employeeForm.value.department ||
            !employeeForm.value.position
          ) {
            showToast("Please fill in all required fields", "error");
            return;
          }

          // Update employee
          const index = employees.value.findIndex(
            (e) => e.id === employeeForm.value.id
          );
          if (index !== -1) {
            employees.value[index] = { ...employeeForm.value };
            showToast(
              `Employee ${employeeForm.value.name} has been updated successfully.`,
              "success"
            );
          }
        } else if (createModalType.value === "project") {
          // Form validation
          if (
            !projectForm.value.name ||
            !projectForm.value.description ||
            !projectForm.value.startDate ||
            !projectForm.value.endDate
          ) {
            showToast("Please fill in all required fields", "error");
            return;
          }

          // Handle team selection
          let selectedTeam = [];
          const teamSelect = document.getElementById("team");
          if (teamSelect) {
            Array.from(teamSelect.selectedOptions).forEach((option) => {
              selectedTeam.push(option.value);
            });
          }

          // Update project
          const index = projects.value.findIndex(
            (p) => p.id === projectForm.value.id
          );
          if (index !== -1) {
            // Preserve team if not modified
            projects.value[index] = {
              ...projectForm.value,
              team: selectedTeam.length
                ? selectedTeam
                : projects.value[index].team,
              progress: parseInt(projectForm.value.progress) || 0,
              tasksCompleted: parseInt(projectForm.value.tasksCompleted) || 0,
              totalTasks: parseInt(projectForm.value.totalTasks) || 0,
            };
            showToast(
              `Project ${projectForm.value.name} has been updated successfully.`,
              "success"
            );
          }
        } else if (createModalType.value === "task") {
          // Form validation
          if (
            !taskForm.value.title ||
            !taskForm.value.project ||
            !taskForm.value.assignedTo ||
            !taskForm.value.dueDate
          ) {
            showToast("Please fill in all required fields", "error");
            return;
          }

          // Track status change for project progress update
          const oldStatus = currentItem.value.status;
          const newStatus = taskForm.value.status;
          const oldProject = currentItem.value.project;
          const newProject = taskForm.value.project;

          // Update task
          const index = tasks.value.findIndex(
            (t) => t.id === taskForm.value.id
          );
          if (index !== -1) {
            tasks.value[index] = { ...taskForm.value };

            // Update project task counts if status changed
            if (oldStatus !== newStatus || oldProject !== newProject) {
              // Handle old project updates
              if (oldProject) {
                const oldProjIndex = projects.value.findIndex(
                  (p) => p.name === oldProject
                );
                if (oldProjIndex !== -1) {
                  if (oldStatus === "Completed") {
                    projects.value[oldProjIndex].tasksCompleted = Math.max(
                      0,
                      projects.value[oldProjIndex].tasksCompleted - 1
                    );
                  }
                  if (oldProject !== newProject) {
                    projects.value[oldProjIndex].totalTasks = Math.max(
                      0,
                      projects.value[oldProjIndex].totalTasks - 1
                    );
                  }
                  // Update progress
                  if (projects.value[oldProjIndex].totalTasks > 0) {
                    projects.value[oldProjIndex].progress = Math.round(
                      (projects.value[oldProjIndex].tasksCompleted /
                        projects.value[oldProjIndex].totalTasks) *
                        100
                    );
                  } else {
                    projects.value[oldProjIndex].progress = 0;
                  }
                }
              }

              // Handle new project updates
              if (newProject) {
                const newProjIndex = projects.value.findIndex(
                  (p) => p.name === newProject
                );
                if (newProjIndex !== -1) {
                  if (newStatus === "Completed") {
                    projects.value[newProjIndex].tasksCompleted++;
                  }
                  if (oldProject !== newProject) {
                    projects.value[newProjIndex].totalTasks++;
                  }
                  // Update progress
                  if (projects.value[newProjIndex].totalTasks > 0) {
                    projects.value[newProjIndex].progress = Math.round(
                      (projects.value[newProjIndex].tasksCompleted /
                        projects.value[newProjIndex].totalTasks) *
                        100
                    );
                  }
                }
              }
            }

            showToast(
              `Task ${taskForm.value.title} has been updated successfully.`,
              "success"
            );
          }
        }

        // Close modal and reset form
        showCreateModal.value = false;
        currentItem.value = null;
        resetForms();

        // If view modal is open for the same item, refresh it
        if (showViewModal.value && viewItem.value && viewItem.value.id) {
          if (
            viewModalType.value === "employee" &&
            createModalType.value === "employee" &&
            employeeForm.value.id === viewItem.value.id
          ) {
            const updatedEmployee = employees.value.find(
              (e) => e.id === viewItem.value.id
            );
            if (updatedEmployee) {
              viewItem.value = { ...updatedEmployee };
            }
          } else if (
            viewModalType.value === "project" &&
            createModalType.value === "project" &&
            projectForm.value.id === viewItem.value.id
          ) {
            const updatedProject = projects.value.find(
              (p) => p.id === viewItem.value.id
            );
            if (updatedProject) {
              viewItem.value = { ...updatedProject };
            }
          } else if (
            viewModalType.value === "task" &&
            createModalType.value === "task" &&
            taskForm.value.id === viewItem.value.id
          ) {
            const updatedTask = tasks.value.find(
              (t) => t.id === viewItem.value.id
            );
            if (updatedTask) {
              viewItem.value = { ...updatedTask };
            }
          }
        }
      } catch (error) {
        console.error("Error updating item:", error);
        showToast(
          "An error occurred while updating. Please try again.",
          "error"
        );
      }
    };

    // --- DELETE ---
    const confirmDelete = (type, id) => {
      deleteType.value = type;
      deleteItemId.value = id;
      showDeleteModal.value = true;
    };

    const deleteItem = () => {
      try {
        if (deleteType.value === "employee") {
          const index = employees.value.findIndex(
            (e) => e.id === deleteItemId.value
          );
          if (index !== -1) {
            const deletedName = employees.value[index].name;
            employees.value.splice(index, 1);
            showToast(
              `Employee ${deletedName} has been deleted successfully.`,
              "success"
            );
          }
        } else if (deleteType.value === "project") {
          const index = projects.value.findIndex(
            (p) => p.id === deleteItemId.value
          );
          if (index !== -1) {
            const deletedName = projects.value[index].name;

            // Remove associated tasks
            const projectName = projects.value[index].name;
            tasks.value = tasks.value.filter(
              (task) => task.project !== projectName
            );

            // Delete project
            projects.value.splice(index, 1);
            showToast(
              `Project ${deletedName} has been deleted successfully.`,
              "success"
            );
          }
        } else if (deleteType.value === "task") {
          const index = tasks.value.findIndex(
            (t) => t.id === deleteItemId.value
          );
          if (index !== -1) {
            const task = tasks.value[index];
            const deletedName = task.title;

            // Update project task counts
            const relatedProject = projects.value.find(
              (p) => p.name === task.project
            );
            if (relatedProject) {
              relatedProject.totalTasks--;
              if (task.status === "Completed") {
                relatedProject.tasksCompleted--;
              }

              // Update progress
              if (relatedProject.totalTasks > 0) {
                relatedProject.progress = Math.round(
                  (relatedProject.tasksCompleted / relatedProject.totalTasks) *
                    100
                );
              } else {
                relatedProject.progress = 0;
              }
            }

            // Delete task
            tasks.value.splice(index, 1);
            showToast(
              `Task ${deletedName} has been deleted successfully.`,
              "success"
            );
          }
        }

        // Close modal
        showDeleteModal.value = false;
        deleteType.value = "";
        deleteItemId.value = null;

        // If there's a view modal open with this item, close it
        if (
          showViewModal.value &&
          viewItem.value &&
          viewItem.value.id === deleteItemId.value
        ) {
          closeViewModal();
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        showToast(
          "An error occurred while deleting. Please try again.",
          "error"
        );
      }
    };

    // Edit operations
    const editEmployee = (employee) => {
      // If we're in a view modal, close it first
      if (showViewModal.value) {
        showViewModal.value = false;
      }

      // Small delay to allow the view modal to close
      setTimeout(() => {
        openEditModal(employee, "employee");
      }, 300);
    };

    const editProject = (project) => {
      // If we're in a view modal, close it first
      if (showViewModal.value) {
        showViewModal.value = false;
      }

      // Small delay to allow the view modal to close
      setTimeout(() => {
        openEditModal(project, "project");
      }, 300);
    };

    const editTask = (task) => {
      // If we're in a view modal, close it first
      if (showViewModal.value) {
        showViewModal.value = false;
      }

      // Small delay to allow the view modal to close
      setTimeout(() => {
        openEditModal(task, "task");
      }, 300);
    };

    // Delete operations
    const deleteEmployee = (employee) => {
      confirmDelete("employee", employee.id);
    };

    const deleteProject = (project) => {
      confirmDelete("project", project.id);
    };

    const deleteTask = (task) => {
      confirmDelete("task", task.id);
    };

    const toggleTaskStatus = (task) => {
      const isViewMode = showViewModal.value && viewModalType.value === "task";

      // Find the task in the array
      const index = tasks.value.findIndex((t) => t.id === task.id);
      if (index === -1) return;

      if (tasks.value[index].status === "Completed") {
        tasks.value[index].status = "In Progress";

        // Update project task counts
        const relatedProject = projects.value.find(
          (p) => p.name === tasks.value[index].project
        );
        if (relatedProject) {
          relatedProject.tasksCompleted--;
          // Update progress
          if (relatedProject.totalTasks > 0) {
            relatedProject.progress = Math.round(
              (relatedProject.tasksCompleted / relatedProject.totalTasks) * 100
            );
          }
        }
      } else {
        tasks.value[index].status = "Completed";

        // Update project task counts
        const relatedProject = projects.value.find(
          (p) => p.name === tasks.value[index].project
        );
        if (relatedProject) {
          relatedProject.tasksCompleted++;
          // Update progress
          if (relatedProject.totalTasks > 0) {
            relatedProject.progress = Math.round(
              (relatedProject.tasksCompleted / relatedProject.totalTasks) * 100
            );
          }
        }
      }

      // Refresh view modal if we're in view mode
      if (isViewMode) {
        viewItem.value = { ...tasks.value[index] };
      }

      showToast(
        `Task status updated to "${tasks.value[index].status}"`,
        "success"
      );
    };

    return {
      // State
      sidebarOpen,
      sideBarOpenDesktop,
      activeView,
      showCreateModal,
      createModalType,
      showDeleteModal,
      showProfileModal,
      activeTaskFilter,
      employees,
      projects,
      tasks,
      filteredTasks,
      employeeForm,
      projectForm,
      taskForm,
      employeeOptions,
      projectOptions,
      deleteType,
      deleteItemId,

      // View Modal State
      showViewModal,
      viewModalType,
      viewItem,
      assignedProjects,
      assignedTasks,
      projectTasks,
      projectProgress,

      // UI Methods
      toggleSidebar,
      toggleSidebarDesktop,
      setActiveView,

      // CRUD Methods
      openCreateModal,
      saveNewItem,
      updateItem,
      deleteItem,

      // View Methods
      viewEmployee,
      viewProject,
      viewTask,
      closeViewModal,

      // Edit Methods
      editEmployee,
      editProject,
      editTask,

      // Delete Methods
      deleteEmployee,
      deleteProject,
      deleteTask,

      // Task Methods
      toggleTaskStatus,
      currentItem,
    };
  },
}).mount("#app");
