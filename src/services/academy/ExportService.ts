import { CourseModule, Lesson } from '../types/academy';

/**
 * Serviço responsável por consolidar o conteúdo de um módulo
 * em um formato amigável para PDF ou NotebookLM.
 */
export const exportModuleToMarkdown = (module: CourseModule): string => {
  let doc = `# 📘 MARINA ACADEMY: \${module.title}\n\n`;
  doc += `> \${module.description}\n\n`;
  doc += `---\n\n`;

  module.lessons.forEach((lesson, index) => {
    doc += `## Aula \${index + 1}: \${lesson.title}\n\n`;
    
    if (lesson.content.markdown) {
      doc += `### 📖 Explicação Teórica\n\n\${lesson.content.markdown}\n\n`;
    }

    if (lesson.content.codeExamples && lesson.content.codeExamples.length > 0) {
      doc += `### 💻 Exemplos de Código\n\n`;
      lesson.content.codeExamples.forEach(ex => {
        doc += `#### \${ex.title}\n\`\`\`javascript\n\${ex.code}\n\`\`\`\n*Explicação: \${ex.explanation}*\n\n`;
      });
    }

    if (lesson.tips && lesson.tips.length > 0) {
      doc += `### 💡 Dicas de Especialista\n`;
      lesson.tips.forEach(tip => doc += `- \${tip}\n`);
      doc += `\n`;
    }

    doc += `\n---\n\n`;
  });

  doc += `\n*Gerado automaticamente pela Marina IA — \${new Date().toLocaleDateString()}*\n`;

  return doc;
};
