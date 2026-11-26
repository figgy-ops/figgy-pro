# Caroline McLallen

**Automation Specialist / Systems Analyst**

I build Microsoft 365 workflows and internal applications for the Texas Historical Commission. My work includes automating staff training and certificates, rebuilding the agency’s SharePoint intranet, and making accessibility findings easier to track. I use AI coding assistants to implement requirements I define, review the changes against those requirements, and train staff on AI tools and SharePoint. My independent AI research focuses on instruction following and recovery from interrupted tasks.

- **Specialties** · Workflow automation, SharePoint, web operations
- **Based in** · Austin, Texas

## Selected work

### AI and automation

#### SharePoint LMS assignment and certificate workflows

Extended a SharePoint learning management system with Power Automate workflows that create annual training and learning-path assignments. Added eligibility checks and checked existing assignments, completion records, and verified certificates before creating new records. Logged which assignments were created, skipped, or failed for each employee. Built a separate workflow that generates a PDF certificate after verified completion and updates the employee’s training record.

Used AI to trace the existing flow actions and diagnose failures from run history. When a group assignment failed, checked the SharePoint group lookup and assignment filters against the data the flow actually received. Verified annual training and learning-path assignments for individuals. Kept All Staff outside that test scope.

Power Automate · SharePoint Online · Microsoft Entra ID

#### SharePoint Copilot and knowledge retrieval

Configured and deployed Copilot agents that help staff find information across SharePoint sites using retrieval-augmented generation (RAG).

Connected Copilot agents to SharePoint content, managed Microsoft 365 Copilot license assignments, and trained staff on how to use the tools.

Microsoft 365 Copilot · SharePoint · RAG

#### AI agent reliability research

Built a local Python test harness to study how AI agents follow instructions, complete tasks, and resume interrupted workflows.

Designed controlled scenarios that varied instructions and checkpoint conditions. Compared task completion and recovery behavior across scenarios and used pytest to make the checks repeatable. The test suite passed 14 automated checks.

Python · pytest · Git

### SharePoint administration

#### SharePoint intranet and governance

Rebuilt the agency intranet and organized contract documents in a repository with custom metadata and views.

Improved navigation, disabled anonymous sharing links, and removed self-service site creation in a 500+ site SharePoint environment. Used PnP PowerShell for repeatable administration and wrote procedures for site owners.

SharePoint Online · PnP PowerShell · Microsoft 365

#### Intern onboarding workspace

Built a SharePoint hub for interns to find schedules, onboarding resources, division links, and staff contacts.

Built the interface in SPFx and connected a weekly Microsoft Forms timesheet to a SharePoint list through Power Automate.

SPFx · React · TypeScript · Microsoft Forms · Power Automate

### Web operations and accessibility

#### Web publishing and CMS operations

Managed a law firm’s WordPress intranet and supported public-sector publishing across SharePoint, Teams, and the agency website.

Used Google Analytics to identify hard-to-find, high-demand content and improve navigation, worked with Drupal developers on Outlook-managed calendar embeds, and revised vendor requirements for accessibility and security across WordPress, Drupal, Craft CMS, and custom PHP sites.

WordPress · Drupal · Craft CMS · Google Analytics · WCAG

#### Application inventory and accessibility tracking

Built a SharePoint application that brought 39 application records and their accessibility and compliance statuses into one place.

Set the requirements for a SharePoint list-backed inventory and directed an AI coding assistant through the SPFx implementation. Specified which statuses staff needed to see and what the print view should include. Reviewed the generated changes against those requirements, then used WAVE and keyboard testing to assess public websites and documented findings for remediation.

SPFx · React · TypeScript · WCAG · WAVE

### Interface samples

Interactive demos use fictional content to show how the interfaces work.

- Program workspace
- Legal services interface
- Product catalog

## Experience

### Systems Analyst III / Automation Specialist

**Texas Historical Commission · Aug 2026 to present**

Build workflow automations and SharePoint applications and assess public websites for accessibility. Connect Copilot agents in SharePoint to help staff find content, manage Microsoft 365 Copilot license assignments, and train staff on SharePoint and AI tools.

### IT Support Specialist III

**Texas Historical Commission · Feb 2024 to Jul 2026**

Rebuilt the agency intranet, developed staff-facing tools, and supported Microsoft 365, guest access, endpoints, and connectivity across field sites.

### Microsoft 365 / SharePoint Consultant

**Independent consulting · Jun 2025 to present**

Advise on SharePoint permissions, navigation, information architecture, and collaboration workflows.

### IT / Operations Support Specialist

**Private law firm · May 2020 to Feb 2024**

Managed the WordPress intranet, rebuilt the public website, and supported Microsoft 365, user access, endpoints, and business applications.

## Technical profile

- **Automation** · Power Automate, PowerShell, PnP PowerShell, REST APIs, Microsoft Forms, Python
- **Microsoft 365** · SharePoint Online, SPFx, Microsoft Entra ID, permissions, information architecture
- **Web development and CMS** · WordPress, Drupal, Craft CMS, React, TypeScript, Next.js, HTML/CSS, Git
- **AI research and development** · OpenAI Codex, Microsoft 365 Copilot, RAG, local Python and pytest evaluation, Git, AI-assisted code review
- **Accessibility and analytics** · WCAG 2.1/2.2, keyboard testing, WAVE, Google Analytics

### Credentials

- Fortinet Network Security Expert Level 3: Certified Associate, 2025–2027
- Career Essentials in System Administration, issued 2025

## Accessibility implementation

Builds WCAG 2.1/2.2 and Section 508 requirements into internal applications, SharePoint components, and public websites.

- **Structure:** Semantic HTML, useful heading and list structure, accessible names, and ARIA when native controls are not sufficient.
- **Interaction:** Keyboard operation, visible focus, logical tab order, modal focus management, and clear form labels and errors.
- **Verification:** Screen-reader checks, contrast review, zoom and responsive reflow, and testing against defined acceptance criteria.
- **Applied work:** SPFx components, internal program tools, intranet navigation, and responsive public websites.

## Contact

- [Email](mailto:caroline360@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/caroline-mclallen/)
- [GitHub](https://github.com/figgy-ops)
