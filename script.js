// Submission data
// Modal functionality
function showModal(submission) {
    const modal = document.getElementById('scoreModal');
    const modalTitle = modal.querySelector('.modal-title');
    const scores = modal.querySelectorAll('.category .score');
    const explanations = modal.querySelectorAll('.category .explanation');
    const totalScore = modal.querySelector('.total-score span');
    const videoButton = modal.querySelector('.watch-video-btn');

    modalTitle.textContent = `${submission.name}: ${submission.title}`;

    // Handle video button
    if (submission.videoFile) {
        videoButton.removeAttribute('disabled');
        videoButton.onclick = () => {
            // Create a download link for the video
            const link = document.createElement('a');
            link.href = submission.videoFile;
            link.download = submission.videoFile;
            link.click();
        };
    } else {
        videoButton.setAttribute('disabled', 'true');
        videoButton.onclick = null;
    }
    
    // Update scores and explanations
    if (submission.scoreBreakdown) {
        scores[0].textContent = `${submission.scoreBreakdown.creativity.score}/4`;
        scores[1].textContent = `${submission.scoreBreakdown.replicability.score}/4`;
        scores[2].textContent = `${submission.scoreBreakdown.storytelling.score}/4`;
        scores[3].textContent = `${submission.scoreBreakdown.impact.score}/4`;

        explanations[0].textContent = submission.scoreBreakdown.creativity.explanation;
        explanations[1].textContent = submission.scoreBreakdown.replicability.explanation;
        explanations[2].textContent = submission.scoreBreakdown.storytelling.explanation;
        explanations[3].textContent = submission.scoreBreakdown.impact.explanation;
    }

    totalScore.textContent = `${submission.score}/${submission.maxScore}`;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    const modal = document.getElementById('scoreModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Close modal when clicking outside of it
document.addEventListener('click', (e) => {
    const modal = document.getElementById('scoreModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal when clicking the close button
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

const submissions = [
    {
        rank: 1,
        name: "Terry Penner",
        title: "AI Use-Case: Enhancing Presentation with AI Imagery",
        score: 15,
        maxScore: 16,
        status: "active",
        videoFile: "SAP Terry Penner AI Can Do That Challenge_anonymous.mp4",
        explanation: "Terry's submission is highly creative, using AI to generate customized imagery for presentations. The storytelling is compelling, and the impact is strong, effectively enhancing presentation quality and communicating value to business leaders. The submission could improve by providing more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 4,
                explanation: "Terry's submission is highly creative, utilizing AI to generate customized imagery for a presentation. The use of a sailboat with a BTP logo created by the Canva AI image generator is a novel and imaginative approach. This breaks conventional norms and leaves a lasting impression, aligning with the rubric's criteria for high creativity."
            },
            replicability: {
                score: 4,
                explanation: "The submission provides clear steps on how Terry used the Canva AI image generator and the Generative AI Experience Lab to create and format the presentation. The process is detailed and structured, making it easy for others to replicate, which meets the rubric's criteria for high replicability."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. However, it lacks emotional depth or a compelling narrative that could engage the audience more deeply. This aligns with the rubric's criteria for a good but not exceptional storytelling score."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showing how the AI-generated presentation satisfied the executive and enhanced SAP's communication with business leaders. This significant change and value align with the rubric's criteria for a high impact score."
            }
        }
    },
    {
        rank: 2,
        name: "Alexandra Brekke",
        title: "AI Use-Case: AI-Powered Client Success Management",
        score: 15,
        maxScore: 16,
        status: "active",
        videoFile: "NEW Part 1 of The A(I) Can Do That! Challenge_anonymous.mp4",
        explanation: "Alexandra's submission is innovative, using AI to enhance client success management with unique roles like 'Insight Outlist.' The storytelling is engaging, and the impact is significant, reducing churn risks. More detailed replication steps would enhance the submission.",
        scoreBreakdown: {
            creativity: {
                score: 4,
                explanation: "The submission is highly creative, presenting a fresh and imaginative approach to client success management. The use of AI personas like 'Prompta, the Insight Outlist' and 'Renewal Ranger, the Risk Eliminator' adds a unique twist and engages the audience. This imaginative execution breaks conventional norms and leaves a lasting impression."
            },
            replicability: {
                score: 3,
                explanation: "The submission provides a general process using tools like the SAP Digital Launchpad and Microsoft Copilot. While the steps are outlined, they lack detailed instructions that would make replication straightforward. The submission could be improved by providing more specific guidance or a step-by-step tutorial."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-paced, with a strong narrative that includes a clear problem, solution, and outcome. The use of metaphors like 'A-Team rises' and 'AI champs' adds emotional depth and engagement. This includes a strong hook and persuasive elements."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showing how AI tools can quickly unlock client insights, prepare calls, and build renewal strategies. The use of AI to detect churn signals and deploy action plans shows significant change and value."
            }
        }
    },
    {
        rank: 3,
        name: "Alexandra Brekke",
        title: "AI Use-Case: AI-Driven Market Insights and Enablement",
        score: 15,
        maxScore: 16,
        status: "active",
        videoFile: "NEW Part 2 of The A(I) Can Do That! Challenge_anonymous.mp4",
        explanation: "This submission is highly creative, using AI for market insights and enablement. The storytelling is dynamic, and the impact is strong, automating processes and scaling impact. It could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 4,
                explanation: "The submission is highly creative, presenting a fresh and imaginative approach to market insights and enablement. The use of AI personas like 'Trend Tracer' and 'Enable Mentor' adds a unique twist and engages the audience. This imaginative execution breaks conventional norms and leaves a lasting impression."
            },
            replicability: {
                score: 3,
                explanation: "The submission provides a general process using AI to scan industry trends and lead enablement sessions. While the steps are outlined, they lack detailed instructions that would make replication straightforward. The submission could be improved by providing more specific guidance or a step-by-step tutorial."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-paced, with a strong narrative that includes a clear problem, solution, and outcome. The use of metaphors like 'superhero story' and 'villain of inefficiency' adds emotional depth and engagement. This includes a strong hook and persuasive elements."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showing how AI tools can transform chaos into clarity and enhance productivity. The use of AI to automate processes and scale impact shows significant change and value."
            }
        }
    },
    {
        rank: 4,
        name: "Mudita Mithel",
        title: "AI Use-Case: SAP's Machine Translation Tool",
        score: 15,
        maxScore: 16,
        status: "active",
        videoFile: "Mudita Mithel_Sr. Content Specialist_AI Chall_anonymous.mp4",
        explanation: "Mudita's submission is highly innovative, showcasing SAP's machine translation tool to automate email campaign translations. It presents a fresh and engaging approach to reducing translation time and cost. The narrative is compelling, and the impact is significant, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 4,
                explanation: "Mudita's submission is highly creative, showcasing SAP's machine translation tool to automate email campaign translations. The narrative introduces the tool as a 'new teammate,' which is a novel and engaging metaphor. This imaginative execution breaks conventional norms and leaves a lasting impression."
            },
            replicability: {
                score: 3,
                explanation: "The submission provides a general process of uploading content into the AI tool for translation. While the steps are outlined, they lack detailed instructions that would make replication straightforward. The submission could be improved by providing more specific guidance or a step-by-step tutorial."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-paced, with a strong narrative that includes a clear problem, solution, and outcome. The use of humor and relatable scenarios, such as the frustration with traditional translation processes, adds emotional depth and engagement."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting the time and cost savings achieved through the AI tool. The narrative clearly shows how the tool reduces translation time from 5-7 business days to seconds and cuts costs significantly."
            }
        }
    },
    {
        rank: 5,
        name: "Aurelia Catalina",
        title: "AI Use-Case: AI as a Creative Sidekick",
        score: 15,
        maxScore: 16,
        status: "active",
        videoFile: "Making AI Awesome - One Lesson at the Time_anonymous.mp4",
        explanation: "Aurelia's submission is highly innovative, showcasing AI as a creative sidekick in developing learning content. It presents a fresh and engaging approach to enhancing creativity and productivity. The narrative is compelling, and the impact is significant, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 4,
                explanation: "Aurelia's submission is highly creative, presenting a unique approach to using AI as a creative sidekick in developing learning content. The concept of integrating AI into the creative process is innovative and engaging. The narrative of AI being a 'sidekick' and the playful tone contribute to its creativity."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines a general process for utilizing AI tools in content creation, including brainstorming and drafting. While the steps are mentioned, they lack detailed instructions that would make replication straightforward for others. The submission mentions using internal GPT and SAPAI launchpad but does not provide detailed steps."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-structured, with a clear narrative that includes a defined challenge, solution, and outcome. The narrative is engaging, with a clear progression from introducing the AI as a team member to demonstrating its role in content creation."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showcasing how AI can significantly enhance the efficiency and quality of learning content development. The narrative clearly articulates the benefits, such as saving time and improving creativity. The submission highlights how AI helps make complex topics simple."
            }
        }
    },
    {
        rank: 6,
        name: "Ariel Furriel",
        title: "AI Use-Case: AI Launchpad for Workflow Automation",
        score: 15,
        maxScore: 16,
        status: "active",
        videoFile: "Furriel_Ariel_NAMER_AR_anonymous.mp4",
        explanation: "Ariel's submission is highly innovative, showcasing the use of AI Launchpad for automating workflows and enhancing productivity. It presents a fresh and engaging approach to streamlining processes. The narrative is compelling, and the impact is significant, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 4,
                explanation: "Ariel's submission is highly creative, utilizing AI Launchpad to build automations and internal tools that enhance user productivity. The metaphor of AI being 'like duct tape for broken workflows but smarter' is imaginative and engaging. The playful interaction with the AI bot adds humor and originality."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines the use of AI Launchpad and tools like ChatGPT and Copilot for creative tasks. While the process is described, it lacks detailed, step-by-step instructions that would make replication straightforward. More specific guidance on how to implement these automations would enhance replicability."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-paced, with a clear narrative that includes a defined challenge, solution, and outcome. The playful dialogue with the AI bot and the humorous elements engage the audience effectively."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting the reduction of manual errors and freeing up time for creative thinking. The narrative clearly articulates the benefits of using AI to streamline workflows and enhance productivity."
            }
        }
    },
    {
        rank: 7,
        name: "Anthony Hopkins",
        title: "AI Use-Case: AI-Driven Growth Journey",
        score: 14,
        maxScore: 16,
        status: "active",
        videoFile: "From First Prompt to Peak Performance - My AI_anonymous.pdf",
        explanation: "Anthony's submission is creative, using a mountain metaphor for growth with AI tools. The storytelling is compelling, and the impact is strong, emphasizing transformation. Providing detailed replication steps would improve the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Anthony's submission demonstrates creativity by using a mountain metaphor to illustrate the growth journey facilitated by AI tools. This imaginative approach engages the audience and provides a visual representation of the concept. However, while the metaphor is effective, it could be further developed with additional unique elements."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines a general process for leveraging AI tools to support growth initiatives. While it provides a basic framework, it lacks detailed, step-by-step instructions that would make replication straightforward for others. More specific guidance on how to implement the suggested strategies would improve replicability."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-structured, with a clear narrative that includes a defined challenge, solution, and outcome. Anthony effectively engages the audience by illustrating the journey of growth and transformation, making it relatable and impactful."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showcasing how AI tools can facilitate significant growth and transformation. The narrative clearly articulates the benefits of using AI to enhance processes and drive results. The submission effectively communicates the value of AI in achieving business objectives."
            }
        }
    },
    {
        rank: 8,
        name: "Atul Savur",
        title: "AI Use-Case: Staffing and Resourcing with SARA",
        score: 14,
        maxScore: 16,
        status: "active",
        videoFile: "Atul Savur.mp4",
        explanation: "Atul's submission is innovative, using SARA for staffing and resourcing. The storytelling is clear, and the impact is strong, enhancing staffing efficiency. More detailed replication steps would enhance the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Atul's submission introduces the innovative concept of using AI for staffing and resourcing through the SARA tool. This idea is relevant and demonstrates creativity. However, the submission could be enhanced by providing more unique examples or a deeper exploration of how SARA differentiates itself from traditional methods."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines a general process for using the SARA tool to manage staffing and resourcing. It provides a basic framework but lacks detailed, step-by-step instructions that would make replication straightforward for others. More specific guidance on how to implement the tool effectively would improve replicability."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-structured, with a clear narrative that includes a defined challenge, solution, and outcome. Atul effectively engages the audience by illustrating the impact of AI on staffing efficiency, making it relatable and impactful."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showcasing how the SARA tool can significantly enhance staffing processes and improve efficiency. The narrative clearly articulates the benefits of using AI to streamline operations and reduce time spent on manual tasks."
            }
        }
    },
    {
        rank: 9,
        name: "Eithel Meza",
        title: "AI Use-Case: Automated Infrastructure Self-Healing",
        score: 14,
        maxScore: 16,
        status: "active",
        videoFile: "SelfHealing_anonymous.mp4",
        explanation: "Eithel's submission is highly innovative, showcasing an AI-powered recovery system that monitors, diagnoses, and fixes infrastructure issues automatically. The narrative is clear, and the impact is transformative, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Eithel's submission introduces a creative concept of an AI-powered self-healing infrastructure system. This innovative idea involves using AI to monitor, diagnose, and automatically resolve infrastructure issues, which is both relevant and forward-thinking. However, the submission could be improved by offering more unique examples or a deeper exploration of how this system stands out from traditional methods."
            },
            replicability: {
                score: 3,
                explanation: "The submission provides a general framework for implementing the self-healing infrastructure system but lacks detailed, step-by-step instructions that would make replication straightforward for others. More specific guidance on setting up and utilizing the system effectively would enhance replicability."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-structured, featuring a clear narrative that includes a defined challenge, solution, and outcome. Eithel effectively engages the audience by illustrating the impact of the AI system on infrastructure management, making it relatable and impactful."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showcasing how the AI-powered self-healing system can significantly enhance infrastructure reliability and reduce downtime. The narrative clearly articulates the benefits of using AI to automate maintenance tasks and improve operational efficiency."
            }
        }
    },
    {
        rank: 10,
        name: "Kevin Antony Gomez",
        title: "AI Use-Case: Outcome.AI for Idea Generation",
        score: 14,
        maxScore: 16,
        status: "active",
        videoFile: "KevinAntonyGomez_OutcomeAI_anonymous.mp4",
        explanation: "Kevin's submission is highly innovative, showcasing Outcome.AI, an AI-powered web app for idea generation and collaboration. The narrative is clear, and the impact is transformative, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Kevin's submission presents a creative approach by showcasing Outcome.AI as a tool for idea generation and collaboration. The concept of using AI to facilitate brainstorming sessions is innovative and relevant. However, the submission could be enhanced by providing more unique examples or a deeper exploration of how Outcome.AI differentiates itself from other brainstorming tools."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines a general process for using Outcome.AI to generate ideas and collaborate effectively. While it provides a basic framework, it lacks detailed, step-by-step instructions that would make replication straightforward for others. More specific guidance on how to implement the tool effectively would improve replicability."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-structured, with a clear narrative that includes a defined challenge, solution, and outcome. Kevin effectively engages the audience by illustrating the journey of using Outcome.AI to enhance creativity and collaboration, making it relatable and impactful."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showcasing how Outcome.AI can significantly enhance the idea generation process and improve team collaboration. The narrative clearly articulates the benefits of using AI to streamline brainstorming sessions and foster creativity."
            }
        }
    },
    {
        rank: 11,
        name: "Patrick Hansen",
        title: "AI Use-Case: Joule for Consultants",
        score: 14,
        maxScore: 16,
        status: "active",
        videoFile: "What AI Can Do-20251015_133417-Meeting Record_anonymous.mp4",
        explanation: "Patrick's submission effectively showcases the use of Joule for Consultants in enhancing sales strategies and creating engaging demos. The narrative is clear and engaging, demonstrating practical benefits and a strong impact on sales processes. The submission could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Patrick's submission presents a creative approach by showcasing the use of Joule for Consultants to enhance sales strategies and create engaging demos. The concept of integrating AI into the sales process is innovative and relevant. However, the submission could be improved by providing more unique examples or a deeper exploration of how Joule differentiates itself from other sales tools."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines a general process for utilizing Joule in sales strategies, including steps for creating demos and engaging clients. While it provides a basic framework, it lacks detailed, step-by-step instructions that would make replication straightforward for others."
            },
            storytelling: {
                score: 4,
                explanation: "The storytelling is compelling and well-structured, featuring a clear narrative that includes a defined challenge, solution, and outcome. Patrick effectively engages the audience by illustrating the impact of Joule on sales processes, making it relatable and impactful."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showcasing how Joule can significantly enhance sales strategies and improve client engagement. The narrative clearly articulates the benefits of using AI to streamline sales processes and create more effective demos."
            }
        }
    },
    {
        rank: 12,
        name: "Javier Ocampo",
        title: "AI Use-Case: Travel Packing with ChatGPT",
        score: 13,
        maxScore: 16,
        status: "active",
        videoFile: "copy_9651ACCB-66BE-4DFA-942E-C175C824CCF1_anonymous.mov",
        explanation: "Javier's submission is creative and humorous, using ChatGPT for packing assistance. The storytelling is compelling, and the impact is clear, simplifying the packing process. It could improve by providing more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Javier's submission demonstrates creativity by utilizing ChatGPT for travel packing assistance, which is a unique application of AI technology. The concept of using AI to simplify the packing process is innovative and relevant. However, the submission could be enhanced by providing more unique examples or scenarios that showcase the versatility of the tool."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines a general process for using ChatGPT to generate packing lists based on user preferences and travel details. While it provides a basic framework, it lacks detailed, step-by-step instructions that would make replication straightforward for others."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Javier effectively engages the audience by illustrating the convenience of using AI for packing assistance. However, the narrative could benefit from more emotional depth or personal anecdotes that would make it more relatable and engaging."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how ChatGPT can significantly simplify the packing process and reduce stress for travelers. The narrative clearly articulates the benefits of using AI to create personalized packing lists."
            }
        }
    },
    {
        rank: 13,
        name: "Nayna Patel",
        title: "AI Use-Case: Copilot for Code Automation",
        score: 13,
        maxScore: 16,
        status: "active",
        videoFile: "Demo service layer generate 1_anonymous.mp4",
        explanation: "Nayna's submission effectively demonstrates the use of Copilot for automating code tasks in VSCode. The narrative is concise and practical, highlighting the tool's ability to generate and self-correct code. The submission could be improved by providing more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Nayna's submission demonstrates creativity by utilizing AI tools to automate code tasks in VSCode. The concept of using AI to enhance coding efficiency is innovative and relevant. However, the submission could be improved by providing more unique examples or scenarios that showcase the versatility of the AI tool in different coding contexts."
            },
            replicability: {
                score: 3,
                explanation: "The submission outlines a general process for using AI in code automation, including how to set up the tools and integrate them into the coding workflow. While it provides a basic framework, it lacks detailed, step-by-step instructions that would make replication straightforward for others."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Nayna effectively engages the audience by illustrating the benefits of using AI for coding tasks. However, the narrative could benefit from more emotional depth or personal anecdotes that would make it more relatable and engaging."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance coding efficiency and reduce errors. The narrative clearly articulates the benefits of using AI to automate repetitive coding tasks."
            }
        }
    },
    {
        rank: 14,
        name: "Ravi Misra",
        title: "AI Use-Case: AI-Powered Personal Assistant",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "AI Video-Ravi Misra_anonymous.mp4",
        explanation: "Ravi's submission is creative, using AI as a personal assistant. The storytelling is clear, and the impact is evident, enhancing productivity. Providing detailed replication steps and specific impact metrics would improve the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Ravi's submission demonstrates creativity by utilizing AI as a personal assistant to enhance productivity. The concept of integrating AI into daily tasks is relevant and innovative. The use of 'One AI Space Manager' as a personal assistant to manage documents and knowledge repositories is a novel approach."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using the AI personal assistant, mentioning the assignment of documents and knowledge repositories. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Ravi effectively engages the audience by illustrating the benefits of using an AI personal assistant, such as saving time and multiplying human potential."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how the AI personal assistant can significantly enhance productivity and streamline daily tasks. The narrative clearly articulates the benefits of using AI to manage schedules and reminders."
            }
        }
    },
    {
        rank: 15,
        name: "Connie Turman",
        title: "AI Use-Case: Enhancing Leadership with AI",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "IMG_0909_anonymous.mov",
        explanation: "Connie's submission is creative, using AI to enhance leadership tasks. The storytelling is clear, and the impact is evident, enhancing leadership effectiveness. More detailed replication steps and specific impact metrics would enhance the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Connie's submission demonstrates creativity by utilizing AI to enhance leadership tasks. The concept of integrating AI into leadership processes is relevant and innovative. She uses AI to synthesize information, structure agendas, and generate visuals, which are creative applications."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in leadership tasks, mentioning various tools and their applications. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Connie effectively engages the audience by illustrating the benefits of using AI in leadership, such as improving decision-making and enhancing team collaboration."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance leadership effectiveness and streamline decision-making processes. The narrative clearly articulates the benefits of using AI to support leadership tasks."
            }
        }
    },
    {
        rank: 16,
        name: "Ernesto Espindola",
        title: "AI Use-Case: Database Analysis with GenAI",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "Sad Bunny The HANA DBA_anonymous.mp4",
        explanation: "Ernesto's submission is creative, using AI for database analysis. The storytelling is clear, and the impact is evident, simplifying complex tasks. Providing detailed replication steps and specific impact metrics would improve the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Ernesto's submission demonstrates creativity by utilizing AI for database analysis, which is a relevant and innovative application. The concept of using AI to streamline data processing and analysis is compelling."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in database analysis, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Ernesto effectively engages the audience by illustrating the benefits of using AI in database analysis, such as improving accuracy and efficiency."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance database analysis and decision-making processes. The narrative clearly articulates the benefits of using AI to automate data tasks and improve insights."
            }
        }
    },
    {
        rank: 17,
        name: "Pushpa Vijay",
        title: "AI Use-Case: AI-Driven Root Cause Analysis",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "Pushpa_Vijay_Ai can do that_anonymous.mp4",
        explanation: "Pushpa's submission is creative, using AI for root cause analysis. The storytelling is clear, and the impact is evident, enhancing problem-solving. More detailed replication steps and specific impact metrics would enhance the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Pushpa's submission demonstrates creativity by utilizing AI for root cause analysis, which is a relevant and innovative application. The concept of using AI to identify underlying issues in processes is compelling. However, the submission could be enhanced by providing more unique examples or scenarios that showcase the versatility of AI in different analytical contexts."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in root cause analysis, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague, making it challenging for others to implement the tools effectively."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Pushpa effectively engages the audience by illustrating the benefits of using AI in root cause analysis, such as improving problem-solving efficiency. However, the narrative could benefit from more emotional depth or personal anecdotes."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance root cause analysis and decision-making processes. The narrative clearly articulates the benefits of using AI to automate analysis tasks and improve insights, aligning with the rubric's criteria for strong, transformative impact."
            }
        }
    },
    {
        rank: 18,
        name: "Frank Densborn",
        title: "AI Use-Case: AI-Driven Sales Order Creation",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "AppHausAIdeateSolutionMatcher_anonymous.mov",
        explanation: "Frank's submission is creative, using AI for sales order creation. The storytelling is clear, and the impact is evident, streamlining processes. Providing detailed replication steps and specific impact metrics would improve the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Frank's submission demonstrates creativity by utilizing AI for sales order creation, which is a relevant and innovative application. The concept of automating the sales order process is compelling and shows a fresh approach to improving efficiency. However, the submission could be enhanced by providing more unique examples or scenarios."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in sales order creation, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague, making it challenging for others to implement."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Frank effectively engages the audience by illustrating the benefits of using AI in sales order creation, such as reducing processing time and minimizing errors. However, the narrative could benefit from more emotional depth."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance the sales order process and improve overall efficiency. The narrative clearly articulates the benefits of using AI to streamline operations and reduce manual tasks."
            }
        }
    },
    {
        rank: 19,
        name: "Andrew Ford",
        title: "AI Use-Case: Digital Adoption with Joule",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "AI Challenge_anonymous.mp4",
        explanation: "Andrew's submission is creative, using Joule for digital adoption. The storytelling is clear, and the impact is evident, enhancing customer engagement. More detailed replication steps and specific impact metrics would enhance the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Andrew's submission demonstrates creativity by utilizing AI for digital adoption, which is a relevant and innovative application. The concept of using AI to facilitate user engagement and streamline the onboarding process is compelling. However, the submission could be enhanced by providing more unique examples."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for implementing AI in digital adoption, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Andrew effectively engages the audience by illustrating the benefits of using AI in digital adoption, such as improving user experience and reducing time to proficiency."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance digital adoption processes and improve overall user engagement. The narrative clearly articulates the benefits of using AI to streamline onboarding and support."
            }
        }
    },
    {
        rank: 20,
        name: "Daniel Nagle",
        title: "AI Use-Case: Enhancing Presentations with AI Feedback",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "AI Can Do That_Dan Nagle_4 (60 sec)_anonymous.mp4",
        explanation: "Daniel's submission is creative, using AI for presentation feedback. The storytelling is clear, and the impact is evident, improving presentation quality. Providing detailed replication steps and specific impact metrics would improve the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Daniel's submission demonstrates creativity by utilizing AI for presentation feedback, which is a relevant and innovative application. The concept of using AI to enhance presentation quality and effectiveness is compelling. However, the submission could be improved by providing more unique examples."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI to gather feedback on presentations, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Daniel effectively engages the audience by illustrating the benefits of using AI for presentation feedback, such as improving clarity and engagement."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance the quality of presentations and improve audience engagement. The narrative clearly articulates the benefits of using AI to provide actionable feedback."
            }
        }
    },
    {
        rank: 21,
        name: "Aubree Cote",
        title: "AI Use-Case: Balancing Work and Community with AI",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "Aubree Cote.mp4",
        explanation: "Aubree's submission is creative, using AI to balance work and community. The storytelling is clear, and the impact is evident, enhancing life balance. More detailed replication steps and specific impact metrics would enhance the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Aubree's submission demonstrates creativity by utilizing AI to balance work and community engagement, which is a relevant and innovative application. The concept of integrating AI to manage personal and professional responsibilities is compelling. However, the submission could be enhanced by providing more unique examples."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI to manage tasks and responsibilities, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Aubree effectively engages the audience by illustrating the benefits of using AI to balance work and community involvement, such as improving time management."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance work-life balance and improve overall well-being. The narrative clearly articulates the benefits of using AI to streamline tasks and manage responsibilities."
            }
        }
    },
    {
        rank: 22,
        name: "Suganthi Manickam",
        title: "AI Use-Case: Streamlining Development with Joule",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "Screen Recording 2025-10-20_1_anonymous.mov",
        explanation: "Suganthi's submission is creative, using AI for development processes. The storytelling is clear, and the impact is evident, streamlining activities. Providing detailed replication steps and specific impact metrics would improve the submission.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Suganthi's submission demonstrates creativity by utilizing AI tools like Joule and GenAI Experience to streamline development processes. The use of AI to create a landscape architecture diagram and generate a Plant UML script is innovative. However, the submission could be improved by providing more unique examples."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in development, mentioning the creation of a landscape architecture diagram and a Plant UML script. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge (handling Arriba development activities), solution (using Joule and GenAI tools), and outcome (creating necessary diagrams quickly). However, the narrative could benefit from more emotional depth."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance development processes and improve overall efficiency. The narrative clearly articulates the benefits of using AI to automate tasks and streamline workflows."
            }
        }
    },
    {
        rank: 23,
        name: "Alexandre Kaihara",
        title: "AI Use-Case: AI-Driven Development Automation",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "Alexandre Kaihara Ai Usage_anonymous.mp4",
        explanation: "Alexandre's submission is highly creative, automating development processes with AI. The impact is strong, but storytelling and replication steps could be improved.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Alexandre's submission is creative in its application of AI for development automation, which is both relevant and innovative. The idea of automating repetitive coding tasks to boost developer productivity is compelling. However, the submission could be enhanced by including more unique examples."
            },
            replicability: {
                score: 2,
                explanation: "The submission provides a general overview of using AI in development automation, mentioning the tools and methods used. However, it lacks detailed, step-by-step instructions that would make it easy for others to replicate. The guidance is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, outlining a challenge, solution, and outcome. Alexandre engages the audience by illustrating the benefits of using AI in development automation, such as increased efficiency and reduced manual errors."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by showing how AI can significantly enhance development processes and improve overall productivity. The narrative clearly articulates the benefits of using AI to automate tasks and streamline workflows."
            }
        }
    },
    {
        rank: 24,
        name: "Pei Dong Hu",
        title: "AI Use-Case: Reviewing Pull Requests with Copilot",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "Demo review PR_anonymous.mov",
        explanation: "Pei's submission effectively showcases the use of Copilot in reviewing pull requests. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Pei's submission demonstrates creativity by utilizing AI, specifically Copilot, to assist in reviewing pull requests. This application is relevant and innovative, as it addresses a common challenge in software development. However, the submission could be enhanced by providing more unique examples or scenarios."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using Copilot in the review of pull requests, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Pei effectively engages the audience by illustrating the benefits of using AI in the pull request review process, such as improving accuracy and saving time."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance the pull request review process and improve overall efficiency. The narrative clearly articulates the benefits of using AI to automate reviews and reduce manual errors."
            }
        }
    },
    {
        rank: 25,
        name: "Han Long",
        title: "AI Use-Case: Developer Intelligence with SAP AI Tool",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "FTRemoval_anonymous.mp4",
        explanation: "Han's submission effectively showcases the use of SAP AI Tool Developer Intelligence in managing feature toggles. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Han's submission demonstrates creativity by utilizing AI tools to manage feature toggles effectively. This application is relevant and innovative, addressing a common challenge in software development. The use of natural language commands and the integration of AI to automate feature toggle removal is a fresh approach."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in managing feature toggles, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Han effectively engages the audience by illustrating the benefits of using AI in feature toggle management, such as improving deployment efficiency and reducing risks."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance feature management processes and improve overall efficiency. The narrative clearly articulates the benefits of using AI to automate feature toggles and streamline workflows."
            }
        }
    },
    {
        rank: 26,
        name: "Varun Kakuske",
        title: "AI Use-Case: AI Assistant for SAP Documentation",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "SAP_AI_Challenge_anonymous 1.mov",
        explanation: "Varun's submission effectively showcases the use of an AI Assistant for SAP documentation navigation. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Varun's submission demonstrates creativity by utilizing AI to assist in SAP documentation navigation. This application is relevant and innovative, addressing a common challenge faced by users in managing extensive documentation. The idea of using AI to streamline access to information is compelling."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in SAP documentation navigation, mentioning the tools and methods employed, such as SAP AI core service and SAP Gen AI hub SDK. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Varun effectively engages the audience by illustrating the benefits of using AI in documentation navigation, such as improving efficiency and reducing time spent searching for information."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance documentation navigation and improve overall user experience. The narrative clearly articulates the benefits of using AI to automate information retrieval and streamline workflows."
            }
        }
    },
    {
        rank: 27,
        name: "Sravan Reddy Kathi",
        title: "AI Use-Case: GitHub Copilot as AI Pro-Programmer",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "Meeting with Kathi, Sravan Reddy-20251006_114_anonymous.mp4",
        explanation: "Sravan's submission effectively showcases the use of GitHub Copilot as an AI pro-programmer. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Sravan's submission demonstrates creativity by showcasing GitHub Copilot as an AI pro-programmer to assist in coding tasks. This application is relevant and innovative, addressing a common challenge faced by developers in managing code efficiently. The idea of leveraging AI to enhance coding productivity is compelling."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using GitHub Copilot in coding, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Sravan effectively engages the audience by illustrating the benefits of using GitHub Copilot in coding tasks, such as improving efficiency and reducing errors."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how GitHub Copilot can significantly enhance coding processes and improve overall productivity. The narrative clearly articulates the benefits of using AI to automate coding tasks and streamline workflows."
            }
        }
    },
    {
        rank: 28,
        name: "Jorge Valero",
        title: "AI Use-Case: Quick Data Retrieval with AI",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "AI Jorge Valero_anonymous.mp4",
        explanation: "Jorge's submission effectively showcases the use of AI for quick data retrieval. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Jorge's submission demonstrates creativity by utilizing AI for quick data retrieval, which is a relevant and innovative application. The concept of using AI to streamline access to data is compelling and addresses a common challenge in data management."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in data retrieval, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Jorge effectively engages the audience by illustrating the benefits of using AI for quick data retrieval, such as improving efficiency and reducing time spent searching for information."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance data retrieval processes and improve overall user experience. The narrative clearly articulates the benefits of using AI to automate information retrieval and streamline workflows."
            }
        }
    },
    {
        rank: 29,
        name: "Jerome Fausser",
        title: "AI Use-Case: Data Export Automation",
        score: 12,
        maxScore: 16,
        status: "active",
        videoFile: "CVS Claim processing 4_anonymous.mp4",
        explanation: "Jerome's submission effectively showcases a simple yet practical use-case of automating data export processes. The narrative is straightforward, demonstrating the convenience and efficiency of the process. The submission could benefit from more detailed replication steps and specific impact metrics.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Jerome's submission demonstrates creativity by utilizing AI for exporting claims data to Excel, which is a practical and innovative application. The concept of using AI to streamline data export processes is compelling and addresses a common challenge in data management."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI to export data, mentioning the use of a filter bar and exporting to Excel. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Jerome effectively engages the audience by illustrating the benefits of using AI for data export, such as improving convenience and efficiency."
            },
            impact: {
                score: 4,
                explanation: "The submission demonstrates a strong impact by highlighting how AI can significantly enhance data export processes and improve overall efficiency. The narrative clearly articulates the benefits of using AI to automate data export and streamline workflows."
            }
        }
    },
    {
        rank: 30,
        name: "Dhiredra Gehlot",
        title: "AI Use-Case: Data Analysis with AI Agents",
        score: 11,
        maxScore: 16,
        status: "active",
        videoFile: "I use Joule Do You-Dhiredra Gehlot_anonymous.MOV",
        explanation: "Dhiredra's submission is creative, using AI agents for data analysis. The storytelling is clear, and the impact is evident, but it could improve in providing detailed replication steps and specific impact metrics.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Dhiredra's submission demonstrates creativity by utilizing AI agents for data analysis, which is a relevant and innovative application. The concept of employing AI to enhance data processing and insights is compelling and addresses a common challenge in data management."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI agents in data analysis, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Dhiredra effectively engages the audience by illustrating the benefits of using AI agents in data analysis, such as improving accuracy and efficiency."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by highlighting how AI can enhance data analysis processes. While it articulates some benefits of using AI to automate tasks and improve insights, the narrative could be strengthened by providing specific examples of measurable improvements or outcomes."
            }
        }
    },
    {
        rank: 31,
        name: "Sascha Schwarzbauer",
        title: "AI Use-Case: Automating RFP Responses",
        score: 11,
        maxScore: 16,
        status: "active",
        videoFile: "Sascha Schwarzbauer,.mov",
        explanation: "Sascha's submission is creative, automating RFP responses with AI. The storytelling is basic, and it could improve by providing more detailed replication steps and enhancing engagement.",
        scoreBreakdown: {
            creativity: {
                score: 2,
                explanation: "The submission demonstrates some creative elements by utilizing Gen AI to answer RFP questions, which is a novel application. However, it lacks depth and cohesion in its presentation. The idea of using AI to automate RFP responses is interesting but not fully developed or explained in a way that stands out."
            },
            replicability: {
                score: 3,
                explanation: "The submission provides a general process that others could follow with some effort: creating a space in OneAI Space Manager, uploading the RFP document, and using AI Assistant to answer questions. While the steps are outlined, they lack detailed instructions that would make replication straightforward."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear with a logical progression, having a beginning, middle, and end. It describes the process in a straightforward manner, but lacks emotional or narrative depth. The submission could be improved by adding more context or a personal story to make it more engaging and relatable."
            },
            impact: {
                score: 3,
                explanation: "The submission mentions the benefit of quickly analyzing and answering RFP questions, which shows practical benefit. However, the impact is limited in scope and lacks depth or evidence of significant change. Providing specific examples of time saved or improvements in efficiency would enhance the perceived impact."
            }
        }
    },
    {
        rank: 32,
        name: "Christopher Vozella",
        title: "AI Use-Case: SAP Joule for Consultants",
        score: 11,
        maxScore: 16,
        status: "active",
        videoFile: "Christopher Vozella AI Can Do That Challenge_anonymous.MOV",
        explanation: "Christopher's submission effectively promotes SAP Joule for Consultants with engaging storytelling and a persuasive call to action. It demonstrates practical benefits but could benefit from more detailed replication steps and specific impact metrics.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Christopher's submission demonstrates creativity by utilizing AI to enhance the consulting process, which is a relevant and innovative application. The concept of integrating AI to streamline client interactions and improve service delivery is compelling."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in consulting, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Christopher effectively engages the audience by illustrating the benefits of using AI in consulting, such as improving client engagement and service efficiency."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by highlighting how AI can enhance the consulting process. While it articulates some benefits of using AI to improve client interactions and streamline workflows, the narrative could be strengthened by providing specific examples of measurable improvements or outcomes."
            }
        }
    },
    {
        rank: 33,
        name: "Kevin Saygi",
        title: "AI Use-Case: Integrated Tool Chain with AI",
        score: 11,
        maxScore: 16,
        status: "active",
        explanation: "Kevin's submission effectively showcases the use of AI in managing an integrated tool chain. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps and specific impact metrics.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Kevin's submission demonstrates creativity by utilizing AI to manage an integrated tool chain, which is a relevant and innovative application. The concept of using AI to streamline various tools and processes is compelling and addresses a common challenge in project management."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in managing an integrated tool chain, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Kevin effectively engages the audience by illustrating the benefits of using AI in managing an integrated tool chain, such as improving efficiency and reducing manual errors."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by highlighting how AI can enhance the management of tool chains. While it articulates some benefits of using AI to streamline processes and improve collaboration, the narrative could be strengthened by providing specific examples of measurable improvements."
            }
        }
    },
    {
        rank: 34,
        name: "Natiele Jardim",
        title: "AI Use-Case: AI in Enablement Resources",
        score: 11,
        maxScore: 16,
        status: "active",
        explanation: "Natiele's submission effectively showcases the use of AI in creating enablement resources. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps and specific impact metrics.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Natiele's submission demonstrates creativity by utilizing AI tools like Articulate, Synthesia, and Copilot to create enablement resources. This application is innovative and relevant, addressing the challenge of enhancing training materials and support resources."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in creating enablement resources, mentioning the tools employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Natiele effectively engages the audience by illustrating the benefits of using AI in creating enablement resources, such as improving accessibility and enhancing learning experiences."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by highlighting how AI can enhance the creation of enablement resources. While it articulates some benefits of using AI to streamline content development and improve user engagement, the narrative could be strengthened by providing specific examples."
            }
        }
    },
    {
        rank: 35,
        name: "Sam Raju",
        title: "AI Use-Case: SAP Business AI Workshop",
        score: 11,
        maxScore: 16,
        status: "active",
        explanation: "Sam's submission effectively showcases the use of AI in a workshop setting. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps and specific impact metrics.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Sam's submission demonstrates creativity by utilizing AI to enhance the digital adoption process. The concept of integrating AI to facilitate user onboarding and engagement is innovative and addresses a common challenge in technology adoption."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for using AI in digital adoption, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Sam effectively engages the audience by illustrating the benefits of using AI in digital adoption, such as improving user experience and reducing time to proficiency."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by highlighting how AI can enhance digital adoption processes. While it articulates some benefits of using AI to streamline onboarding and support, the narrative could be strengthened by providing specific examples."
            }
        }
    },
    {
        rank: 36,
        name: "Mordecai Moshin",
        title: "AI Use-Case: Jumpstart Program for Gen AI",
        score: 11,
        maxScore: 16,
        status: "active",
        explanation: "Mordecai's submission effectively showcases the Jumpstart program for Gen AI. It provides a clear narrative and demonstrates practical benefits, though it could benefit from more detailed replication steps and specific impact metrics.",
        scoreBreakdown: {
            creativity: {
                score: 3,
                explanation: "Mordecai's submission demonstrates creativity by utilizing AI in the Jumpstart program for Gen AI. The concept of using AI to accelerate the adoption of generative AI technologies is compelling and addresses a common challenge in technology integration."
            },
            replicability: {
                score: 2,
                explanation: "The submission outlines a general process for implementing the Jumpstart program using AI, mentioning the tools and methods employed. However, it lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance provided is somewhat vague."
            },
            storytelling: {
                score: 3,
                explanation: "The storytelling is clear and follows a logical progression, with a defined challenge, solution, and outcome. Mordecai effectively engages the audience by illustrating the benefits of using AI in the Jumpstart program, such as improving efficiency and facilitating quicker adoption."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by highlighting how AI can enhance the Jumpstart program and improve overall user engagement. While it articulates some benefits of using AI to streamline the adoption process, the narrative could be strengthened by providing specific examples."
            }
        }
    },
    {
        rank: 37,
        name: "Maria Del Pilar Aleman",
        title: "AI Use-Case: Enhancing Customer Engagement with SAP SuccessFactors",
        score: 8,
        maxScore: 16,
        status: "active",
        explanation: "Maria's submission is relevant but lacks creativity and compelling storytelling. It could improve by increasing creativity, providing detailed replication steps, and enhancing storytelling.",
        scoreBreakdown: {
            creativity: {
                score: 2,
                explanation: "Maria's submission attempts to utilize AI to enhance customer engagement through SAP SuccessFactors. However, the concept lacks depth and originality, as it does not present a novel approach to improving customer interactions."
            },
            replicability: {
                score: 1,
                explanation: "The submission provides a vague outline of the process for using AI in customer engagement but lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance is unclear and does not provide sufficient information."
            },
            storytelling: {
                score: 2,
                explanation: "The storytelling is somewhat clear but lacks a compelling narrative structure. While there is a defined challenge and solution, the submission does not effectively engage the audience or illustrate the benefits of using AI in customer engagement."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by mentioning how AI can enhance customer engagement processes. While it articulates some benefits, such as improving response times, the narrative lacks specific examples of measurable improvements or outcomes."
            }
        }
    },
    {
        rank: 38,
        name: "Santosh Vijayan",
        title: "AI Use-Case: SAP Joule for Consultants",
        score: 8,
        maxScore: 16,
        status: "active",
        explanation: "Santosh's submission provides a basic overview of using SAP Joule for Consultants. While it introduces an interesting concept, it lacks detailed guidance and emotional engagement. The impact is mentioned but not deeply explored.",
        scoreBreakdown: {
            creativity: {
                score: 2,
                explanation: "Santosh's submission involves using SAP's Joule for Consultants to answer questions about SAP Object Store. While this application of AI is relevant, it lacks originality and depth. The submission does not present a novel approach or innovative solution."
            },
            replicability: {
                score: 1,
                explanation: "The submission provides a vague outline of the process for using Joule for Consultants but lacks detailed, step-by-step instructions that would make replication straightforward for others. The guidance is unclear and does not provide sufficient information."
            },
            storytelling: {
                score: 2,
                explanation: "The storytelling is somewhat clear but lacks a compelling narrative structure. While there is a defined challenge and solution, the submission does not effectively engage the audience or illustrate the benefits of using AI."
            },
            impact: {
                score: 3,
                explanation: "The submission demonstrates a moderate impact by mentioning how AI can enhance the process of answering questions about SAP Object Store. While it articulates some benefits, the narrative lacks specific examples of measurable improvements."
            }
        }
    },
    {
        rank: 39,
        name: "Anderson Koike",
        title: "AI Use-Case: SKU Inquiry with Ask Services Digital Assistant",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Anderson's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Anderson's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 40,
        name: "Peenakshi Sahu",
        title: "AI Use-Case: Utilizing SAP's AI Launchpad",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Peenakshi's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Peenakshi's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 41,
        name: "John Herrera",
        title: "AI Use-Case: ChatGPT for Coding Assistance",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "John's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "John's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 42,
        name: "Purna Adduri",
        title: "AI Use-Case: GitHub Copilot for Real-Time Coding Assistance",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Purna's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Purna's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 43,
        name: "Arjieet Bhattacharya",
        title: "AI Use-Case: AI-Powered CSM Assistant",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Arjieet's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Arjieet's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 44,
        name: "Raveena Choudhary",
        title: "AI Use-Case: SAP AI Launchpad for Test Case Generation",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Raveena's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Raveena's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 45,
        name: "Jerome Fausser",
        title: "AI Use-Case: Cash Flow Management with SAP and JP Morgan",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 46,
        name: "Jerome Fausser",
        title: "AI Use-Case: Integrated AI for Sales and Financial Strategy Optimization",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 47,
        name: "Jerome Fausser",
        title: "AI Use-Case: AI-Enhanced Financial and Supplier Risk Analysis for Drilling Operations",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 48,
        name: "Jerome Fausser",
        title: "AI Use-Case: Real-Time Anomaly Detection in Sales Orders",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    },
    {
        rank: 49,
        name: "Jerome Fausser",
        title: "AI Use-Case: Streamlined Procurement with Intelligent Purchase Agent",
        score: 0,
        maxScore: 16,
        status: "disqualified",
        explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit.",
        scoreBreakdown: {
            creativity: {
                score: 0,
                explanation: "Jerome's submission is disqualified due to exceeding the 60-second duration limit. As a result, it does not demonstrate any creativity within the allowed timeframe."
            },
            replicability: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Therefore, it does not provide any replicable process within the allowed timeframe."
            },
            storytelling: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Consequently, it does not present a coherent narrative within the allowed timeframe."
            },
            impact: {
                score: 0,
                explanation: "The submission is disqualified due to exceeding the 60-second duration limit. Thus, it does not articulate any impact within the allowed timeframe."
            }
        }
    }
];

// Initialize the table
function initializeTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    submissions.forEach(submission => {
        const row = document.createElement('tr');
        row.classList.add(submission.status);
        row.setAttribute('title', submission.explanation);
        
        // Add click handler for scoring breakdown
        row.addEventListener('click', () => showModal(submission));

        row.innerHTML = `
            <td>${submission.rank}</td>
            <td>
                <div class="submission-title">
                    <strong>${submission.name}</strong>
                    <p>${submission.title}</p>
                </div>
            </td>
            <td>${submission.score}/${submission.maxScore}</td>
            <td><span class="status status-${submission.status}">${submission.status}</span></td>
        `;

        tbody.appendChild(row);
    });
}

// Filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter table rows
            const filter = button.getAttribute('data-filter');
            const rows = document.querySelectorAll('tbody tr');

            rows.forEach(row => {
                if (filter === 'all') {
                    row.style.display = '';
                } else {
                    row.style.display = row.classList.contains(filter) ? '' : 'none';
                }
            });
        });
    });
}

// Add tooltip functionality
function setupTooltips() {
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('mouseover', (e) => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = row.getAttribute('title');
            
            // Position tooltip near the mouse
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
            
            document.body.appendChild(tooltip);
        });

        row.addEventListener('mouseout', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeTable();
    setupFilters();
    setupTooltips();
});
