module.exports = {
    apps: [
      {
        name: 'qvolv-module', // Name of the application
        script: 'npm', // Script to run
        args: 'start', // Arguments to pass to the script
        cwd: '.', // Current working directory
        interpreter: 'none', // Specify the interpreter to use
        autorestart: true, // Restart the app if it crashes
        watch: true, // Watch for file changes and restart
        max_memory_restart: '1G', // Restart the app if memory usage exceeds specified amount
        env: {
          NODE_ENV: 'production' // Environment variables for the application
        },
        log_date_format: 'YYYY-MM-DD HH:mm:ss', // Logging date format
        error_file: '/var/log/pm2/react-app-error.log', // Error log file path
        out_file: '/var/log/pm2/react-app-out.log', // Output log file path
        merge_logs: true, // Merge logs into single file
      }
    ]
  };