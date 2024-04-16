<?php
$skillArray = [
  "Attention to detail",
  "Time management & organisation",
  "HTML",
  "CSS",
  "JavaScript",
  "Java (inc. Netbeans IDE)",
  "Python",
  "SQL (inc. MySQL, PostgreSQL, MariaDB)",
  "Git",
  "PHP",
  "JQuery",
  "Wireframing",
  "Command line (Windows/Linux/Git)",
  "Microsoft Office Word, Excel, Outlook",
  "ASP",
  "VBScript",
  "Entity Relationship Diagrams (ERDs)",
  "Unified Modelling Language (UML)",
  "Object Constraint Language (OCL)",
  "Algorithms (inc. complexity)",
  "Cordova (for Android hybrid webapp)",
  "Cloud technology (understanding of AWS, pros/cons, scalability, elasticity, reliability, availability zones, security)",
  "Open Stack (practical experience)",
  "REST APIs, SOAP, web services (theory & some practical experience using Postman)",
  "Understanding of security inc. encryption, confidentiality, GDPR",
  "Machine learning and AI (inc. Keras Tensorflow and Jupyter)",
  "Agile development (theory)",
  "Software engineering (understanding of architecture, design patterns inc. MVC/factory/adapter, testing inc. black/white box, UAT, system)",
  "Requirements analysis (FR/NFRs, producing analysis/object/class/sequence/state chart diagrams)",
  "Project management (inc. Gantt charts)",
  "Project Lifecycle (theory and practical)",
  "UI/UX (inc. accessibility/ARIA standards, quality attribute scenarios)"
];

echo '<section class="cv_skills">
        <div class="cv_heading">Skills</div>
        <ul>';

foreach ($skillArray as $skill) {
  echo '<li>' . $skill . '</li>';
}

echo '  </ul>
      </section>';