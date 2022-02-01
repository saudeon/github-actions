const regex = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\(.+?\))?: .+?$/;

module.exports = async function run(deps) {
  const { exec, github, core } = deps;

  const title = github.context.payload.pull_request.title;
  core.info(`Pull Request title: "${title}"`);
  
  // Check if title pass regex
  core.info(`Regex: ${regex}`);

  if (!regex.test(title)) {
    core.setFailed(`Pull Request title "${title}" failed to match regex - ${regex}`);
    return
  }
  
}
