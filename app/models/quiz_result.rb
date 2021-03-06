class QuizResult < ActiveRecord::Base
  attr_accessible :custom_answer, :quiz_answer_id, :quiz_question_id, :user_id

  belongs_to :user_id
  belongs_to :quiz_question
  belongs_to :quiz_answer_id
end
