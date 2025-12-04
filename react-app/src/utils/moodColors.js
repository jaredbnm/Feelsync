// utility to set background and blob colors based on mood
export function resetMoodColors() {
  const root = document.documentElement;
  root.style.setProperty('--color-bg1', 'rgb(10, 15, 24)');
  root.style.setProperty('--color-bg2', 'rgb(18, 30, 43)');
  root.style.setProperty('--color1', '13, 61, 105');
  root.style.setProperty('--color2', '31, 78, 122');
  root.style.setProperty('--color3', '47, 89, 126');
  root.style.setProperty('--color4', '77, 109, 139');
  root.style.setProperty('--color-interactive', '0, 255, 255');
}

const moodColors = {
  happy: {
    bg1: 'rgb(240, 200, 80)',
    bg2: 'rgb(240, 170, 60)',
    color1: '240, 200, 80',
    color2: '240, 170, 60',
    color3: '220, 200, 120',
    color4: '230, 210, 150',
    interactive: '220, 200, 120',
  },
  sad: {
    bg1: 'rgb(54, 84, 134)',
    bg2: 'rgb(36, 37, 130)',
    color1: '54, 84, 134',
    color2: '36, 37, 130',
    color3: '100, 149, 237',
    color4: '70, 130, 180',
    interactive: '100, 149, 237',
  },
  romantic: {
    bg1: 'rgb(255, 140, 148)',
    bg2: 'rgb(255, 94, 98)',
    color1: '255, 140, 148',
    color2: '255, 94, 98',
    color3: '255, 182, 193',
    color4: '255, 160, 122',
    interactive: '255, 182, 193',
  },
  relaxed: {
    bg1: 'rgb(90, 160, 200)',
    bg2: 'rgb(120, 180, 200)', 
    color1: '90, 160, 200',
    color2: '120, 180, 200',
    color3: '140, 200, 200',
    color4: '180, 220, 220',
    interactive: '140, 200, 200',
  },
  energetic: {
    bg1: 'rgb(255, 94, 98)',
    bg2: 'rgb(255, 183, 77)',
    color1: '255, 94, 98',
    color2: '255, 183, 77',
    color3: '255, 140, 0',
    color4: '255, 236, 179',
    interactive: '255, 140, 0',
  },
  hardcore: {
    bg1: 'rgb(60, 0, 10)', 
    bg2: 'rgb(90, 0, 20)', 
    color1: '90, 0, 20',
    color2: '120, 0, 30',
    color3: '150, 0, 40',
    color4: '80, 0, 20',
    interactive: '200, 0, 40',
  },
};

export function setMoodColors(mood) {
  const colors = moodColors[mood?.toLowerCase?.()] || null;
  if (!colors) return;
  const root = document.documentElement;
  root.style.setProperty('--color-bg1', colors.bg1);
  root.style.setProperty('--color-bg2', colors.bg2);
  root.style.setProperty('--color1', colors.color1);
  root.style.setProperty('--color2', colors.color2);
  root.style.setProperty('--color3', colors.color3);
  root.style.setProperty('--color4', colors.color4);
  root.style.setProperty('--color-interactive', colors.interactive);
}
