require 'rest-client'

class Api::V1::WordsController < ApplicationController
  def index
    words = Word.all
    render json: words
  end

  def show
    word = Word.find(params[:id])
    render json: word
  end

  def create
    word = Word.create(
      text: params[:text],
      length: params[:text].length,
      vowel_count: vowel_count(params[:text]),
      consonant_count: consonant_count(params[:text])
    )

    render json: word
  end


  def vowel_count(word)
    vowels = "aeiou"
    word.split("").count { |char| vowels.include?(char.downcase) }
  end

  def consonant_count(word)
    word.length - vowel_count(word)
  end

  private

  def word_params
    params.permit(:text)
  end
end
