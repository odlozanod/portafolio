document.addEventListener('DOMContentLoaded', function() {
    // Función para actualizar la información
    function updateExperience(target) {
        let jobTitle = '';
        let jobDescription = [];
        let technologies = [];

        switch (target) {
            case 'exp1':
                jobTitle = 'Analista de Desarrollo y Tecnología';
                jobDescription = [
                    'Desarrollador Frontend Angular y Backend PHP Laravel',
                    'Administración de plataformas web como www.okempleos.com, www.gesth.co, www.gesth360.co, www.proyectservice.com.co, www.ocupate.com.',
                    'Administración de todo el área de sistemas, incluyendo servidores Windows y Linux.',
                    'Administración de bases de datos y seguridad de la información.',
                    'Desarrollos a cliente en Wordpress para sitios como www.carolinamendezjoyeria.com, www.enpopa.com, www.synergias.com.co, www.mediamaratontunja.com.',
                    'Administración de Cpanel y servidores web en AWS, GCP, Hostgator, Godaddy, Colombia Hosting.',
                    'Administración de servidores cloud en AWS.',
                    'Administración de servidor de archivos en Microsoft.',
                    'Generador de soluciones tecnológicas y optimización de procesos.',
                    'Desarrollo de páginas web en Wordpress.',
                    'Líder de implementación de un SGSI basado en la norma ISO 27001.',
                    'Manejo de máquinas virtuales y tecnología e infraestructura en general.'
                ];
                technologies = ['Angular', 'React', 'BI', 'AWS', 'N8N', 'AZURE', 'HTML', 'SQL'];
                break;
            case 'exp2':
                jobTitle = 'Desarrollador Full Stack';
                jobDescription = [
                    'Apoyar en la generación, ajuste y validación de mockups en colaboración con el analista y el usuario.',
                    'Apoyar en el diseño y desarrollo de componentes de software, incluyendo menús, funcionalidades, motores de reglas, servicios y servicios interoperables.',
                    'Apoyar en el diseño y desarrollo del modelo de datos, asegurando su coherencia y eficiencia.',
                    'Apoyar en el diseño y desarrollo de interfaces de usuario atractivas y funcionales.',
                    'Apoyar en el diseño y desarrollo de reportes necesarios para el sistema.',
                    'Realizar pruebas unitarias de las funcionalidades desarrolladas para asegurar su correcto funcionamiento.',
                    'Presentar y ajustar las funcionalidades desarrolladas en colaboración con el analista y el usuario.',
                    'Apoyar en la realización del despliegue y puesta en producción del software desarrollado.',
                    'Realizar otras funciones asignadas que correspondan a la naturaleza del cargo.'
                ];
                technologies = ['Golang', 'BeeGo', 'Angular', 'Material', 'TypeScript', 'SCSS'];
                break;
            case 'exp3':
                jobTitle = 'Help Desk';
                jobDescription = [                    
                    'Migración de bases de datos utilizando MySQL, Airflow y BigQuery.',
                    'Reporte de novedades e incidentes, presentación de informes y solución de requerimientos.',
                    'Monitoreo, actualización y gestión de registros en bases de datos.',
                    'Gestión y administración de software corporativo, ofreciendo soporte técnico tanto remoto como presencial a los usuarios de la APP Chiper Empresarios.'
                ];
                technologies = ['MySQL', 'Airflow', 'BigQuery', 'CSS', 'HTML', 'JavaScript'];
                break;
            case 'exp4':
                jobTitle = 'Tecnólogo en Sistemas';
                jobDescription = [
                    'Diseño y planificación de redes tanto alámbricas como inalámbricas para hogares y empresas.',
                    'Provisión de soporte técnico avanzado a clientes empresariales, incluyendo compañías como Cooviser CTA, ProyectService, Imaginamos, Gesth, Alservicios, Reparaciones Estructurales, Redes Humanas, Dinagas, y Deltagas.',
                    'Instalación y configuración de dispositivos de red de marcas como Unifi, HP, TP-Link y Cisco.',
                    'Reparación de equipos de cómputo, tanto portátiles como PCs, incluyendo mantenimiento preventivo y correctivo de servidores, portátiles, PCs, DVRs, cámaras, impresoras y switches de red.',
                    'Preparación y configuración de equipos de cómputo para su uso en distintos entornos.',
                    'Implementación de aplicaciones de gestión de soporte como Freshdesk y osTicket para la administración de incidencias y soporte técnico.',
                    'Instalación y configuración de dispositivos de almacenamiento en red (NAS) de la marca QNAP.',
                    'Supervisión de inventarios, gestión de compras y ventas, y otros temas relacionados con los sistemas informáticos.'
                ];
                technologies = ['Unifi', 'Cisco', 'TP-Link', 'HP', 'Switches ', 'NAS', 'QNAP'];
                break;
        }

        // Actualizando la información en el HTML
        document.getElementById('job-title').innerText = jobTitle;
        const jobDescList = document.getElementById('job-description');
        jobDescList.innerHTML = ''; // Limpiar antes de agregar nuevas li
        jobDescription.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('text-dark', 'mb-3');
            li.innerHTML = item;
            jobDescList.appendChild(li);
        });

        const techList = document.getElementById('technologies');
        techList.innerHTML = ''; // Limpiar antes de agregar nuevas tecnologías
        technologies.forEach(tech => {
            const techTag = document.createElement('a');
            techTag.classList.add('text-300', 'border', 'border-1', 'px-3', 'py-1');
            techTag.href = '#';
            techTag.innerText = tech;
            techList.appendChild(techTag);
        });
    }

    // Agregar evento de clic a cada experiencia
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const target = item.getAttribute('data-target');
            updateExperience(target);
        });
    });
});
