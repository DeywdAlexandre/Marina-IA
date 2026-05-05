import React from 'react';
import { CourseModule } from '../../types/academy';

interface ModulePdfTemplateProps {
  module: CourseModule;
}

/**
 * Este componente é otimizado para ser impresso como PDF.
 * Ele usa estilos específicos que só aparecem na impressão.
 */
export const ModulePdfTemplate: React.FC<ModulePdfTemplateProps> = ({ module }) => {
  return (
    <div id="pdf-template" className="hidden-print-source" style={{
      padding: '40px',
      color: '#333',
      backgroundColor: 'white',
      fontFamily: 'serif',
      lineHeight: '1.6'
    }}>
      <div style={{ borderBottom: '4px solid #F7DF1E', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', margin: 0 }}>MARINA ACADEMY</h1>
        <p style={{ margin: 0, color: '#666' }}>Material de Apoio e Estudo</p>
      </div>

      <h2 style={{ fontSize: '28px', color: '#000' }}>{module.title}</h2>
      <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555' }}>{module.description}</p>

      <div style={{ marginTop: '40px' }}>
        {module.lessons.map((lesson, idx) => (
          <div key={lesson.id} style={{ marginBottom: '50px', pageBreakInside: 'avoid' }}>
            <h3 style={{ borderLeft: '5px solid #F7DF1E', paddingLeft: '15px', fontSize: '22px' }}>
              Aula {idx + 1}: {lesson.title}
            </h3>
            
            <div style={{ marginTop: '15px' }}>
              {/* O conteúdo markdown precisaria de um parser aqui, 
                  ou injetamos como HTML se já estiver processado */}
              <div dangerouslySetInnerHTML={{ __html: lesson.content.markdown || '' }} />
            </div>

            {lesson.content.codeExamples?.map((ex, ei) => (
              <div key={ei} style={{ 
                marginTop: '15px', 
                backgroundColor: '#f4f4f4', 
                padding: '15px', 
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontFamily: 'monospace'
              }}>
                <strong style={{ display: 'block', marginBottom: '5px' }}>{ex.title}</strong>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{ex.code}</pre>
                <p style={{ fontSize: '12px', marginTop: '10px', color: '#666' }}>{ex.explanation}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '12px', color: '#999', textAlign: 'center' }}>
        © {new Date().getFullYear()} Marina IA Academy - Todos os direitos reservados.
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body * { visibility: hidden; }
          #pdf-template, #pdf-template * { visibility: visible; }
          #pdf-template {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            display: block !important;
          }
          .no-print { display: none !important; }
        }
        .hidden-print-source { display: none; }
      `}} />
    </div>
  );
};
