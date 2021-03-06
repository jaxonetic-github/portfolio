var sections = {
  main: 'main',
  contact: 'contact',
  workHistory: 'work',
  education: 'education',
  technologies: 'technologies'
};

var MARGIN_LEFT = -500;

/************
 *
 * Work History details with parameters for 3d animation in the threejs world
 *
 */
var workHistoryTestData = function() {
 

  /****** Work History Data Setup  *******/
  // Supre fills
  const versiteItems = ['Maintained and updated sites built on top of the .NET framework.', 'Implemented new PHP sites based upon CakePHP, Jquery, and SASS.', 'Designed and Implemented a 3D virtual system using Unity3D, the Oculus Rift, and Kinect technologies.'];
  const presynctItems = ['Implemented  web applications designed  to help companies be paperless by digitalizing internal forms and  processes.', 'Designed and implemented an iPhone/iPad application that collected information(configurable by xml) and sent the information to a server and, ultimately, to a database.'];
  const rubberItems = ['Designed and implemented a Compliance application using EJB3 to track the efficiency and reliability of members within a Supply-Chain network.',
    '· Designed and implemented a prototype for a Bidding/Auction application in which suppliers could enter bids to delivery goods to various members within a Supply-Chain network.'
  ];
  const compuItems = ['Maintained and updated Compucredit\'s Purposecard website which was run on Jboss under the Struts Framework using Velocity templates.  Most of the webservices, however, were written in C# and I maintained, updated, and implemented those as well',
    'Implemented the Java front-end (Velocity/Struts) for the Purposecard Store Locator along with the corresponding Action classes.',
    'Implemented the back-end for the Purposecard Store Locator which included working with DBA’s to design the underlying database table structure and writing the C# server-side code to interact with the database and third party vendors(i.e. Greendot, FDR, etc…).',
    'The Purposecard site initially used Soaplets as webservice clients to its 3rd party and internal webservices.  I converted their Soaplet architecture into an XmlObjects based architecture (i.e. WSDL2Java).',
    'Developed Compucredit’s new Self-Serve Loan Application in a small team using a Java-based Chordiant platform which utilized Business Process Workflows and Ruleset Engines.'
  ]
  const ingeoItems = ['Developed web services behind a web portal and designed database to implement a .NET application that tracks, manages, and transfers liens for WellsFargo.',
    'Designed, implemented, and tested automated C# and Java processes to manage incoming and outgoing SSL file transfers between clients and 3rd party vendors.',
    'Designed, implemented, and tested Java and C# projects which processed Satisfactions, Reconveyances, and Substitution lien documents from Submitters into Ingeo databases.',
    'Designed, implemented, and tested connectors (.NET Serviced Components) used to communicate asynchronously and securely(SSL) with external client systems.',
    'Designed, implemented, and tested tasks (in C#) to create NACHA files with CCD batches from reports taken from clients.',
    'Designed and implemented a service that tracked Liens for Fidelity and queried 3rd party venders for XML updates (Sent, Recorded, Rejected, etc…) which were sent asynchronously back to FNF.',
    'Implemented portals to load reports or Lien data in MSWord and Excel formats and convert them into XML for external delivery or internal processing.',
    'Implemented the integration of 3rd Party Vendor and Submitter services with Ingeo'
  ];

  const metaItems = ['Worked with Business Analysts to acquire financial and business rules for various services within Metavante’s E-Commerce Banking Suite',
    'Implemented front-end (JSP/Servlet) interfaces for creating Wire Transfer templates that communicated with EJB’s for back-end processing of user data',
    'Assisted in design of back-end ACH instruction processing (EJB’s)',
    'Designed the NACHA file creation process into the current suite of bank services',
    'Implemented the external NACHA process that create NACHA files from processed user data stored within an Oracle database.  Implementation included EJBs, SQL, property files, extensive logging, and complex communication with the database to ensure Transaction-like autonomy over user data within the database.',
    'Designed and implemented the NACHA Import functionality and aided in the design of the NACHA Concatenation process.',
    'Created XSLT’s to generate reports in various formats (text delimited, fixed length) for the Positive Pay of the E-Banking suite.',
    'Wrote Unit test cases in preparation for QA testing and worked closely with QA to complete testing and ensure proper functionality'
  ];
  const secFirstItems = ['Gathered requirements and created design documentation including UML for custom tag handlers.',
    'Coded and tested custom tag handlers in an OO language called TOOL',
    'Created template pages for use by custom tag handlers.',
    'Participated in redesign of FORTE development environment into a J2EE architecture'
  ];
  const techItems = ['Instructed a weekly two hour Java recitation class', 'Trained and managed a small team of new recitation Teaching Assistants', 'Prepared and evaluated weekly 45-minute quizzes and the three-hour final exam', 'Assisted professors in general administrative course duties and policy decisions']
  const reyeItems = ['Acted as a buffer/translator between scientists and developers, by helping translate scientific product documents into technical tasks for myself and other developers in JIRA.',
    'Helped managed and act as a point of contact to a team of developers in Vietnam and along the US east coast.',
    'Managed and maintened AWS cloud services.  This included creating Lambdas (in NodeJS and Java) which interact with Dynamo DB, creating API Gateway endpoints, Route53 domain zones,  configuring load balancers, and syncing S3buckets with EC2 instances.',
    'Managed  pushes from the development environment to staging, and production.',
    'Acted as the first point of contact for fixing client and in-house technical issues.',
    'Installed and deployed new systems for clients.',
    'Front-end development in Unity3D and AngularJS.  The Unity application communicated with a remote AngularJS website via the UWK.Webkit.'
  ];
  const gcServicesItems = [
    'Managed accounts with a few hundred consumers, helping them find ways to take their accounts out of “default”.',
    'Sometimes fielded inbound calls but mostly made outbound calls or internet research to find consumers.',
     ];
  
    const starvingItems = [
    'Answered incoming calls dealing with various forms of customer service  ranging from claims, sales',
    'Backed up the dispatcher routing customer requests with movers in real-time',
     ];
  /**
   * return an object pre configured with data to be displayed in the threejs 3d universe
   *
   */
  function workVisualText(workInstitute, yCoord, color, section, subItems) {

    return {
      t: (workInstitute.instituteFromDate +'  to  '+ workInstitute.instituteToDate + ' -> ' + workInstitute.institute + ' --> ' + workInstitute.title + ' ---> ' + workInstitute.city + ', ' + workInstitute.state),
      c: color,
      x: MARGIN_LEFT, //'centered', 
      y: yCoord,
      z: 0,
      obj:workInstitute,
      section: section,
      subItems: subItems
    }
  }

  var rightEyeDetails = {instituteFromDate:'April 2015', instituteToDate: 'Dec 2015', institute: 'Righteye, LLC', title: 'Software Engineer',  city: 'Bethesda',  state: 'MD'}
  var righteye = workVisualText(rightEyeDetails, -150, '#8c8c8c', sections.workHistory, reyeItems);
  var versiteDetails ={ instituteFromDate:'April 2013', instituteToDate: 'Dec 2013', institute: 'Versite',  title: 'Software Engineer',  city: 'Salvador', state: 'Bahia Brazil' }
  var versite = workVisualText(versiteDetails, -220, '#8c8c8c', sections.workHistory, versiteItems);

  var presynctDetails = { instituteFromDate:'Oct 2010',   instituteToDate: 'Nov 2012', institute: 'Presynct Technologies', title: 'Java Developer', city: 'San Francisco', state: 'CA, USA'}
  var presynct = workVisualText(presynctDetails, -290, '#8c8c8c', sections.workHistory,presynctItems);

  var rubberDetails= { instituteFromDate:'May 2007',  instituteToDate: 'Feb 2008', institute: 'RubberNetwork', title: 'Java Developer',  city: 'Atlanta', state: 'GA, USA' }
  var rubber = workVisualText(rubberDetails, -360, '#8c8c8c', sections.workHistory,rubberItems);

var compuDetails = {instituteFromDate:'July 2006', instituteToDate: 'Mar 2007', institute: 'CompuCredit',  title: 'Software Engineer', city: 'Atlanta', state: 'GA, USA'}
var compuCredit = workVisualText(compuDetails, -430, '#8c8c8c', sections.workHistory, compuItems);

var ingeoDetails = {instituteFromDate:'Jan 2004', instituteToDate: 'June 2006', institute: 'Ingeo Systems', title: 'Remote Software Engineer', city: 'Logan', state: 'UT, USA'}
var ingeo = workVisualText(ingeoDetails, -500, '#8c8c8c', sections.workHistory, ingeoItems);

  var metaDetails = {instituteFromDate:'Jan 2001', instituteToDate: 'July 2003', institute: 'Metavante (Bank One)', title: 'Software Engineer', city: 'Atlanta', state: 'GA, USA'}
  var metavante = workVisualText(metaDetails, -570, '#8c8c8c', sections.workHistory, metaItems);

  var s1Details = { instituteFromDate:'Feb 2000', instituteToDate:'Nov 2000', institute:'Security First Technologies (S1)', title: 'Branding Developer', city: 'Atlanta', state: 'GA, USA'};
  var s1tech = workVisualText(s1Details, -640, '#8c8c8c', sections.workHistory,s1tech)

  var techTADetails = { instituteFromDate:'Sept 1997', instituteToDate: 'June 1999', institute: 'College of Computing, Georgia Tech', title: 'Senior TA / Head of Quiz Development(Java)', city: 'Atlanta', state: 'GA, USA'}
  var teachingAsst = workVisualText(techTADetails, -710, '#8c8c8c', sections.workHistory, techItems)

  var gcServicesDetails = {instituteFromDate:'July 2018', instituteToDate: 'Dec 2018', institute: 'GC Services', title: 'Collections Rep', city: 'Tucson', state: 'Arizona, USA'};
  var gcServices = workVisualText(gcServicesDetails, -780, '#8c8c8c', sections.workHistory, gcServicesItems)

  var starvingDetails = {instituteFromDate:'Aug 2017', instituteToDate: 'Dec 2017', institute: 'Starving Students', title: 'Sales Rep', city: 'Los Angeles', state: 'CA, USA' }
  var starvingStudents = workVisualText(starvingDetails, -850, '#8c8c8c', sections.workHistory, starvingItems)
  
  //add work tasks to work section, 
  const versiteHistory = { visualText: versite, items: versiteItems, dataObject:versiteDetails }
  const presynctHistory = {  visualText: presynct, items: presynctItems, dataObject:presynctDetails}
  const rubberHistory = { visualText: rubber, items: rubberItems, dataObject:rubberDetails}
  const compuHistory = {  visualText: compuCredit, items: compuItems, dataObject:compuDetails}
  const ingeoHistory = {visualText: ingeo, items: ingeoItems, dataObject:ingeoDetails}
  const metaHistory = { visualText: metavante, items: metaItems, dataObject:metaDetails}
  const secFirstHistory = { visualText: s1tech, items: secFirstItems, dataObject:s1Details}
  const techHistory = { visualText: teachingAsst,items: techItems, dataObject:techTADetails} 
  const reyeHistory = {visualText: righteye, items: reyeItems, dataObject:rightEyeDetails}
  const starvingHistory ={visualText:starvingStudents, items: starvingItems, dataObject:starvingDetails}
  const gcServicesHistory = {visualText:gcServices, items:gcServicesItems, dataObject:gcServicesDetails}
    
    var workHistoryTitle = {
        t: 'Work History' ,    // text
        h: 20.75 ,              // height
        s: 71.25 ,              // size
        cSg: 4 ,                // curveSegments
        bT: 1 ,                 // bevelThickness
        bS: 1.5 ,               // bevelSize
        bSg: 3 ,                // bevelSegments
        bE: true ,              // bevelEnabled
        x: 'centered' ,
        y: -27 ,
        z: 0 ,
        font: undefined,
        section:sections.workHistory

    }

  //Make an array of work history data
  return {titleObject: workHistoryTitle,
          histories:[gcServicesHistory, starvingHistory, reyeHistory, versiteHistory, presynctHistory, rubberHistory, compuHistory, ingeoHistory, metaHistory, secFirstHistory, techHistory]}; 
}

var technologyTestData = function() {
  const techOSs = {
    category: 'Operating Systems',
    technologies: 'Windows, Linux, Mac OSX'
  };
  const techLangs = {
    category: 'Languages',
    technologies: 'Java(J2EE), Objective C, PHP, Javascript'
  };
  const techFrameworks = {
    category: 'Frameworks',
    technologies: 'Hibernate, Spring, Struts, EJB, Grails, Node, CakePHP'
  };
  const techServers = {
    category: 'Servers',
    technologies: 'Chordiant, Apache, WebSphere, IIS, RESIN, Tomcat, JBOSS'
  };
  const techDbs = {
    category: 'Databases',
    technologies: 'Oracle, MySql, Sql Server, MongoDB, SqlLite, DB2, Neo4j'
  };

  return [techOSs, techLangs, techFrameworks, techServers, techDbs];
}


/************
 *
 * Contact info (name, phone and email) with parameters for 3d animation in the threejs world
 *
 */
var contactName = {
  t: 'Alonzo Jackson', // text
  h: 20.75, // height
  s: 71.25, // size
  cSg: 4, // curveSegments
  bT: 1, // bevelThickness
  bS: 1.5, // bevelSize
  bSg: 3, // bevelSegments
  bE: true, // bevelEnabled
  x: 'centered',
  y: 240,
  z: -14,
  font: undefined,
  section: sections.contact
}

var contactPhone = {
  t: '301.351.5621',
  c: '#8c8c8c',
  x: 'centered',
  y: 185,
  section: sections.contact
}


var contactEmail = {
  t: 'jaxonetic@gmail.com',
  c: '#8c8c8c',
  x: 'centered',
  y: 135,
  section: sections.contact
}

var contactTestData = function() {
  return [contactName, contactPhone, contactEmail];
}

/**
 * Exporting some helpful functions and variables
 */
var educationTestData = function() {

  var educationTitle = {
    t: 'Education', // text
    h: 20.75, // height
    s: 71.25, // size
    cSg: 4, // curveSegments
    bT: 1, // bevelThickness
    bS: 1.5, // bevelSize
    bSg: 3, // bevelSegments
    bE: true, // bevelEnabled
    x: 'centered',
    y: -27,
    z: 0,
    font: undefined,
    section: sections.education
  }

  /**
   * return an object pre configured with data to be displayed in the threejs 3d universe
   *
   */
  function educationVisualText(educationInstitute, yCoord, color, section) {

    return {
      t: (educationInstitute.instituteDate + ' -> ' + educationInstitute.institute + ' --> ' + educationInstitute.degree + ' ---> ' + educationInstitute.city + ', ' + educationInstitute.state),
      c: color,
      x: MARGIN_LEFT, //'centered', 
      y: yCoord,
      z: 0,
      obj: educationInstitute,
      section: section
    }
  }

  const educHistoryTech = educationVisualText({
      instituteDate: 'Dec 1999',
      institute: 'Georgia Institute of Technology',
      degree: 'Bachelor of Computer Engineering',
      city: 'Atlanta',
      state: 'Georgia'
    }, -150, '#8c8c8c', sections.education)
  
  const educHistoryLang =  educationVisualText({
      instituteDate: 'Dec 2011',
      institute: 'Language Culture Coaching, International',
      degree: 'TESOL Certification',
      city: 'Berkeley',
      state: 'California'
    }, -220, '#828282', sections.education)
 
  /******** End of Education Setup  *******/


  return {
    titleObject : educationTitle,
    institutions: [educHistoryTech, educHistoryLang]
  };
}
