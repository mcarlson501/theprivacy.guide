document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const nextStepCard = document.getElementById('next-step-card');
    const progressBar = document.getElementById('progress-bar');
    const completedCountText = document.getElementById('completed-count');
    const totalCountText = document.getElementById('total-count');

    // --- Data ---
    const PROGRESS_KEY = 'thePrivacyGuideTasks';
    let tasks = [];

    const defaultTasks = [
        { id: 1, title: 'Secure Your Web Browser', category: 'Browser Basics', description: 'Your browser can leak data. A few small tweaks can make a big difference.', time: '~5 minutes', completed: false },
        { id: 2, title: 'Review Social Media Privacy', category: 'Social Media Checkup', description: 'Lock down who can see your posts and personal information on platforms like Facebook.', time: '~10 minutes', completed: false },
        { id: 3, title: 'Enable Two-Factor Authentication', category: 'Password Power-Up', description: 'Add a crucial second layer of security to your most important accounts.', time: '~8 minutes', completed: false },
        { id: 4, title: 'Check Your Phone\'s App Permissions', category: 'Phone Settings', description: 'See which apps have access to your location, contacts, and microphone.', time: '~7 minutes', completed: false },
        { id: 5, title: 'Install a Password Manager', category: 'Password Power-Up', description: 'Stop reusing passwords and secure your digital life with one of the most effective tools.', time: '~15 minutes', completed: false }
    ];

    // --- Functions ---

    /**
     * Loads task progress from localStorage or initializes with default tasks.
     */
    const loadTasks = () => {
        const savedTasks = localStorage.getItem(PROGRESS_KEY);
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
        } else {
            tasks = defaultTasks;
        }
    };

    /**
     * Saves the current state of tasks to localStorage.
     */
    const saveProgress = () => {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(tasks));
    };

    /**
     * Renders the dashboard UI based on the current task state.
     */
    const renderDashboard = () => {
        const firstUncompletedTask = tasks.find(task => !task.completed);
        const completedTasksCount = tasks.filter(task => task.completed).length;
        const totalTasksCount = tasks.length;

        // Update progress bar and text
        completedCountText.textContent = completedTasksCount;
        totalCountText.textContent = totalTasksCount;
        const progressPercentage = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;
        progressBar.style.width = `${progressPercentage}%`;

        // Render the next task card
        if (firstUncompletedTask) {
            nextStepCard.innerHTML = `
                <h2>Your Next Step</h2>
                <div class="task" data-task-id="${firstUncompletedTask.id}">
                    <h3>${firstUncompletedTask.title}</h3>
                    <p><strong>Why it Matters:</strong> ${firstUncompletedTask.description}</p>
                    <p><strong>Time:</strong> ${firstUncompletedTask.time}</p>
                    <button id="cta-button">Show Me How</button>
                </div>
                <button id="complete-button">I Did It!</button>
            `;
            // Re-add event listener since we overwrote the button
            document.getElementById('complete-button').addEventListener('click', handleCompletion);
        } else {
            // Handle the "all done" state
            nextStepCard.innerHTML = `
                <h2>All Done!</h2>
                <div class="task">
                    <h3>Congratulations!</h3>
                    <p>You've completed all the available Quick Wins. You've taken a huge step in protecting your digital privacy.</p>
                    <p>Check back later for new guides and Weekend Projects!</p>
                </div>
            `;
        }
    };

    /**
     * Handles the click event for the "I Did It!" button.
     */
    const handleCompletion = () => {
        const taskElement = nextStepCard.querySelector('.task');
        if (!taskElement) return;

        const taskId = parseInt(taskElement.dataset.taskId, 10);
        const task = tasks.find(t => t.id === taskId);

        if (task) {
            task.completed = true;
            saveProgress();
            renderDashboard(); // Re-render to show the next task
        }
    };

    // --- Initial Load ---
    loadTasks();
    renderDashboard();
});
