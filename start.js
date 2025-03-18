const { spawn } = require('child_process');

// Function to run Tailwind CSS command
function runTailwind() {  
  const tailwindProcess = spawn('npx', [
    'tailwindcss',
    '-i', './src/input.css',
    '-o', './dist/output.css',
    '--watch'
  ], {
    stdio: 'inherit', // This will show output in the console
    shell: true
  });

  tailwindProcess.on('error', (error) => {
    console.error('Failed to start Tailwind process:', error);
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('Stopping Tailwind CSS compilation...');
    tailwindProcess.kill('SIGINT');
    process.exit(0);
  });
}

// Run the function
runTailwind();