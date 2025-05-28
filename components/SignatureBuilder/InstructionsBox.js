// InstructionsBox.js
import { getInstructions } from './getInstructions';

export function createInstructionsBox(emailClient) {
  const data = getInstructions(emailClient);
  const container = document.createElement('div');
  container.className = 'bg-[var(--color-surface)] text-[var(--color-foreground)] p-4 rounded-xl shadow-sm border border-[var(--color-border)] text-sm leading-relaxed';
  
  const title = document.createElement('h3');
  title.className = 'font-semibold mb-3 text-[var(--color-foreground)] flex items-center justify-center gap-2 text-center';
  title.innerHTML = `<span>${data.title.split(' ')[0]}</span> ${data.title.substring(data.title.indexOf(' ') + 1)}`;
  
  const ul = document.createElement('ul');
  ul.className = 'list-disc list-inside space-y-2 px-2 text-[var(--color-muted)]';
  
  data.steps.forEach(step => {
    const li = document.createElement('li');
    li.innerText = step;
    li.className = 'text-sm';
    ul.appendChild(li);
  });
  
  container.appendChild(title);
  container.appendChild(ul);
  return container;
}